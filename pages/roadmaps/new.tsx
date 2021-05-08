import { useState } from 'react'
import ButtonSmall from '~/components/button/ButtonSmall'
import RoadmapBasicInfo from '~/components/roadmaps/RoadmapBasicInfo'
import SetGoal from '~/components/roadmaps/SetGoal'
import StepSection from '~/components/roadmaps/StepSection'
import { apiClient } from '~/utils/apiClient'
import { Tag } from '$prisma/client'

const createRoadmapsPage = () => {
  const [tags, setTags] = useState([] as Tag[])
  const [selectedTags, setSelectedTags] = useState<Tag[]>()
  const handleTagKeywordChange = async (keyword: string) => {
    const result = await apiClient.tags.search._name(keyword).$get()
    setTags(result)
  }
  const handleCloseSelectedTag = (tag: Tag) => {
    const newSelectedTags = selectedTags?.filter((selectedTag) => {
      return !(selectedTag.id === tag.id)
    })
    setSelectedTags(newSelectedTags || ([] as Tag[]))
  }
  const handleTagSelect = (tag: Tag) => {
    let newTags
    if (selectedTags) {
      newTags = selectedTags.concat()
      newTags.push(tag)
    } else {
      newTags = [tag]
    }
    setSelectedTags(newTags)
  }
  return (
    <div>
      <RoadmapBasicInfo
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleTagSelect}
        onCloseSelectedTag={handleCloseSelectedTag}
        onTagKeywordChange={handleTagKeywordChange}
      />
      <StepSection />
      <SetGoal />
      <ButtonSmall text="保存" className="block mx-auto mt-40 mb-20" />
    </div>
  )
}

export default createRoadmapsPage
