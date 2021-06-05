import RoadmapForm from '~/components/roadmaps/RoadmapForm'
import { useAuth } from '~/contexts/AuthContext'
import { createLibrary } from '~/utils/libraries'
import type { Library, Roadmap } from '$prisma/client'
import { RoadmapCreateBody, RoadmapUpdateBody } from '~/server/types'
import { createRoadmap, updateRoadmap } from '~/utils/roadmaps'
import { useRouter } from 'next/router'
import { pushSigninWithPrevUrl } from '~/utils/auth'

const NewRoadmapsPage = () => {
  const auth = useAuth()
  const router = useRouter()

  if (!auth?.user) {
    pushSigninWithPrevUrl(router)
  }

  const onCreateLibrary = (title: Library['title'], link?: Library['link']) =>
    createLibrary(auth?.token || '', title, link)
  const onCreateRoadmap = (data: RoadmapCreateBody) =>
    createRoadmap(auth?.token || '', data)
  const onUpdateRoadmap = (id: Roadmap['id'], data: RoadmapUpdateBody) =>
    updateRoadmap(auth?.token || '', id, data)
  return (
    <RoadmapForm
      onCreateLibrary={onCreateLibrary}
      onCreateRoadmap={onCreateRoadmap}
      onUpdateRoadmap={onUpdateRoadmap}
    />
  )
}

export default NewRoadmapsPage
