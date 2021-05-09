import React, { useState } from 'react'
import ButtonSmall from '~/components/button/ButtonSmall'
import RoadmapBasicInfo from '~/components/roadmaps/RoadmapBasicInfo'
import SetGoal from '~/components/roadmaps/SetGoal'
import StepSection from '~/components/roadmaps/StepSection'
import { apiClient } from '~/utils/apiClient'
import { Tag } from '$prisma/client'
import type {
  RoadmapInfo,
  LibraryInfo,
  StepReqBody,
  RecommendedLibraryInfo
} from '$/types/index'
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
  const [steps, setSteps] = useState<StepReqBody[]>([] as StepReqBody[])
  const [libraries, setLibraies] = useState<LibraryInfo[]>()
  const [recommendations, setRecommendations] = useState<
    RecommendedLibraryInfo[]
  >([] as RecommendedLibraryInfo[])
  const [selectedLibrary, setSelectedLibrary] = useState<LibraryInfo | null>(
    null
  )

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
  const handleCreateNewTag = async (name: string) => {
    const result = await apiClient.tags.$post({
      body: {
        name
      }
    })
    setTags([...tags, result])
  }
  const getRecommendatedLibraries = async (libraryIds: number[]) => {
    try {
      const recommendedLibs = await apiClient.libraries.recommended.post({
        body: libraryIds
      })
      setRecommendations(recommendedLibs.body)
      console.log(recommendedLibs.body)
    } catch (error) {
      console.error(error)
    }
  }
  // getRecommendatedLibraries([0, 0, 0])

  const handleAddLibrary = async (title: string, link: string) => {
    try {
      const lib = await apiClient.libraries.$post({
        body: { title, link }
      })
      if (!lib) {
        throw Error('failed to post data')
      }
      setSelectedLibrary(lib)
      return lib
    } catch (error) {
      console.log(error)
    }
  }
  const handleAddStep = (step: StepReqBody) => {
    let newSteps: StepReqBody[]
    if (steps) {
      newSteps = [...steps, step]
    } else {
      newSteps = [step]
    }
    setSteps(newSteps)
    setSelectedLibrary(null)
  }
  const handleDeleteStep = (deltedStep: StepReqBody) => {
    const newSteps = steps.filter((step) => step !== deltedStep)
    setSteps(newSteps)
  }
  const handleLibraryKeywordChange = async (title: string) => {
    try {
      const result = await apiClient.libraries.searchByTitle
        ._title(title)
        .$get()
      setLibraies(result)
    } catch (error) {
      console.error(error)
    }
  }
  // const handleLibraryUrlChange = async (url: string) => {
  //   const result = await apiClient.libraries.searchByLink._link(url).$get()
  //   setLibraies(result)
  // }
  const handleLibrarySelect = (library: LibraryInfo) => {
    setSelectedLibrary(library)
  }
  const handleGoalChange = (goal: RoadmapInfo['goal']) => {
    setGoal(goal)
  }

  const handleSaveRoadmap = async (e: React.MouseEvent<HTMLButtonElement>) => {
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
        forkedRoadmapId: null, // TODO: forkしたときに変える
        steps: steps
      }
      apiClient.roadmaps.$post({ body: reqBody })
      router.push(`/users/${userId}`)
      // router.push(`roadmaps/edit/${resBody.id}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    // FIXME: フォームにしないからバリデーション自分で書かないといけない
    <>
      <RoadmapBasicInfo
        title={title}
        onChangeTitle={handleTitleChange}
        description={description}
        onChangeDescription={handleDescriptionChange}
        tags={tags}
        selectedTags={selectedTags}
        onTagSelect={handleTagSelect}
        onCreateNewTag={handleCreateNewTag}
        onCloseSelectedTag={handleCloseSelectedTag}
        onTagKeywordChange={handleTagKeywordChange}
      />
      <StepSection
        steps={steps}
        onAddStep={handleAddStep}
        onDeleteStep={handleDeleteStep}
        onOpenForm={getRecommendatedLibraries}
        recommendations={recommendations}
        onAddLibrary={handleAddLibrary}
        libraries={libraries}
        selectedLibrary={selectedLibrary}
        onLibrarySelect={handleLibrarySelect}
        onLibraryKeywordChange={handleLibraryKeywordChange}
      />
      <SetGoal goal={goal} onGoalChange={handleGoalChange} />
      <div className="flex flex-col justify-center items-center mt-40 mb-20 ">
        {!title && <div className="text-$accent2">タイトルは必須です</div>}
        <ButtonSmall
          onClick={handleSaveRoadmap}
          type="submit"
          text="保存"
          disabled={!title}
          className="block mx-auto"
        />
      </div>
    </>
  )
}

export default createRoadmapsPage
