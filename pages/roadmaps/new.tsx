import React, { useState } from 'react'
import ButtonSmall from '~/components/button/ButtonSmall'
import RoadmapBasicInfo from '~/components/roadmaps/RoadmapBasicInfo'
import SetGoal from '~/components/roadmaps/SetGoal'
import StepSection from '~/components/roadmaps/StepSection'
import { apiClient } from '~/utils/apiClient'
import { Tag } from '$prisma/client'
import type { RoadmapInfo, StepInfo } from '$/types/index'
import type { RoadmapCreateReqBody } from '$/types/index'
import { useRouter } from 'next/router'
import { useAuth } from '~/contexts/AuthContext'

const createRoadmapsPage = () => {
  const [title, setTitle] = useState<RoadmapCreateReqBody['title']>('')
  const [description, setDescription] = useState<
    RoadmapCreateReqBody['description']
  >(null)
  const [tags, setTags] = useState([] as Tag[])
  const [selectedTags, setSelectedTags] = useState<Tag[]>()
  const [goal, setGoal] = useState<RoadmapInfo['goal']>(null)
  const [steps, setSteps] = useState<StepInfo[]>([] as StepInfo[])
  const [libray, setLibray] = useState<StepInfo['library']>()
  const router = useRouter()
  const auth = useAuth()
  if (!auth?.user) {
    console.log('you have to be logged in')
    router.push('/')
  }
  const handleTitleChange = (title: RoadmapCreateReqBody['title']) => {
    setTitle(title)
  }
  const handleDescriptionChange = (
    description: RoadmapCreateReqBody['description']
  ) => {
    setDescription(description)
  }
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
  const handleAddLibrary = (library: StepInfo['library']) => {
    apiClient.libraries.post({
      body: { title: library.title, link: library.link }
    })
  }
  const handleAddStep = (step: StepInfo) => {
    let newSteps: StepInfo[]
    if (steps) {
      newSteps = [...steps, step]
    } else {
      newSteps = [step]
    }
    setSteps(newSteps)
  }
  const handleDeleteStep = (deltedStep: StepInfo) => {
    const newSteps: StepInfo[] = steps.filter(
      (step) => step.id !== deltedStep.id
    )
    setSteps(newSteps)
  }
  const handleGoalChange = (goal: RoadmapInfo['goal']) => {
    setGoal(goal)
  }

  const handleSubmitRoadmap = async (e: React.MouseEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const userId = auth?.user?.id
      if (typeof userId !== 'number' || !title) {
        return
      }

      const tagNames: Pick<Tag, 'name'>[] =
        selectedTags?.map((selectedTag) => {
          const name = selectedTag.name
          return { name }
        }) || []
      const reqBody: RoadmapCreateReqBody = {
        userId,
        title,
        tags: tagNames,
        description: description,
        goal,
        firstStepId: null,
        forkedRoadmapId: null, // TODO: forkしたときに変える
        steps
      }
      console.log(reqBody)
      const resBody = await apiClient.roadmaps.$post({ body: reqBody })
      console.log('res:', resBody)
      // router.push(`roadmaps/edit/${resBody.id}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmitRoadmap}>
      <RoadmapBasicInfo
        title={title}
        onChangeTitle={handleTitleChange}
        description={description}
        onChangeDescription={handleDescriptionChange}
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleTagSelect}
        onCloseSelectedTag={handleCloseSelectedTag}
        onTagKeywordChange={handleTagKeywordChange}
      />
      <StepSection
        steps={steps}
        onAddStep={handleAddStep}
        onDeleteStep={handleDeleteStep}
        onAddLibrary={handleAddLibrary}
      />
      <SetGoal goal={goal} onGoalChange={handleGoalChange} />
      <ButtonSmall
        type="submit"
        text="保存"
        className="block mx-auto mt-40 mb-20"
      />
    </form>
  )
}

export default createRoadmapsPage
