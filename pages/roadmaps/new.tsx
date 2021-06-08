import RoadmapForm, {
  RoadmapFormSchema,
  StepWithLib
} from '~/components/roadmaps/RoadmapForm'
import { useAuth } from '~/contexts/AuthContext'
import { createLibrary } from '~/utils/libraries'
import type { Library, Tag } from '$prisma/client'
import { RoadmapCreateBody } from '~/server/types'
import { createReqSteps, createReqTags, createRoadmap } from '~/utils/roadmaps'
import Layout from '~/components/Layout'
import { HEADER_BTN_TYPES } from '~/components/header/Header'
import { SubmitHandler } from 'react-hook-form'
import { SelectOption } from '~/components/parts/SelectInput'
import { useRouter } from 'next/router'
import { useState } from 'react'

const NewRoadmapsPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const [steps, setSteps] = useState<StepWithLib[]>([] as StepWithLib[])
  const onCreateLibrary = (title: Library['title'], link?: Library['link']) =>
    createLibrary(auth?.token || '', title, link)
  const onCreateRoadmap = (data: RoadmapCreateBody) =>
    createRoadmap(auth?.token || '', data)

  // on submit RoadmapForm
  const onSubmit: SubmitHandler<RoadmapFormSchema> = async (data) => {
    if (!auth?.user) return
    // create new roadmap
    let reqTags = [] as Pick<Tag, 'name'>[]
    if (data.tagSelect) {
      reqTags = createReqTags(data.tagSelect as SelectOption[])
    }
    const reqSteps = createReqSteps(steps)
    const createBody: RoadmapCreateBody = {
      title: data.title,
      tags: reqTags,
      description: data.description || null,
      forkedRoadmapId: null,
      steps: reqSteps,
      userId: auth.user?.id,
      goal: data.goal || null
    }

    const result = await onCreateRoadmap(createBody)
    router.push(`edit/${result.id}`)
  }
  return (
    <Layout headerType={HEADER_BTN_TYPES.SAVE}>
      <RoadmapForm
        steps={steps}
        setSteps={setSteps}
        onCreateLibrary={onCreateLibrary}
        onSubmit={onSubmit}
      />
    </Layout>
  )
}

export default NewRoadmapsPage
