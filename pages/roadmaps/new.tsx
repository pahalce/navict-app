import RoadmapForm, {
  RoadmapFormSchema,
  StepWithLib
} from '~/components/roadmaps/RoadmapForm'
import { useAuth } from '~/contexts/AuthContext'
import { createLibrary } from '~/utils/libraries'
import { pushSigninWithPrevUrl } from '~/utils/auth'
import type { Library, Tag } from '$prisma/client'
import { RoadmapCreateBody, RoadmapInfo } from '~/server/types'
import { createReqSteps, createReqTags, createRoadmap } from '~/utils/roadmaps'
import Layout from '~/components/Layout'
import { HEADER_BTN_TYPES } from '~/components/Header'
import { SubmitHandler } from 'react-hook-form'
import { SelectOption } from '~/components/parts/SelectInput'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { apiClient } from '~/utils/apiClient'
import NavictChan from '~/components/NavictChan'

const NewRoadmapsPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const { copiedFrom } = router.query
  const [forkedRoadmap, setForkedRoadmap] = useState<RoadmapInfo>()
  const [loading, setLoading] = useState(true)
  let forkedId: number | null
  if (copiedFrom) {
    // returns NaN if parameter is string, not a number
    forkedId = +copiedFrom
    if (!forkedId) {
      return <div>invalid url</div>
    }
  }

  useEffect(() => {
    if (!forkedId) {
      setLoading(false)
      return
    }
    apiClient.roadmaps
      ._roadmapId(forkedId)
      .$get()
      .then((roadmap) => {
        setForkedRoadmap(roadmap)
      })
      .finally(() => setLoading(false))
  }, [])

  if (!auth.isLoggedIn) {
    pushSigninWithPrevUrl(router)
  }

  // for saving on nav button click
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [steps, setSteps] = useState<StepWithLib[]>([] as StepWithLib[])
  const onCreateLibrary = (title: Library['title'], link?: Library['link']) =>
    createLibrary(auth.token || '', title, link)
  const onCreateRoadmap = (data: RoadmapCreateBody) =>
    createRoadmap(auth.token || '', data)

  const fireSubmit = () => {
    buttonRef?.current?.click()
  }
  const onSubmit: SubmitHandler<RoadmapFormSchema> = async (data) => {
    try {
      if (!auth.user) return
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
        forkedRoadmapId: forkedId,
        steps: reqSteps,
        userId: auth.user?.id,
        goal: data.goal || null
      }
      const result = await onCreateRoadmap(createBody)
      router.push(`${result.id}`)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      {loading && <NavictChan text={`LOADING...`} />}
      {!loading && (
        <Layout
          headerType={HEADER_BTN_TYPES.SAVE}
          onHeaderSaveBtnClick={fireSubmit}
        >
          <RoadmapForm
            buttonRef={buttonRef}
            steps={steps}
            setSteps={setSteps}
            onCreateLibrary={onCreateLibrary}
            onSubmitForm={onSubmit}
            defaultRoadmap={forkedRoadmap}
          />
        </Layout>
      )}
    </>
  )
}

export default NewRoadmapsPage
