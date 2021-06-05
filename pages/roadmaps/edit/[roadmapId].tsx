import useAspidaSWR from '@aspida/swr'
import { useRouter } from 'next/router'
import NavictChan from '~/components/NavictChan'
import RoadmapComp from '~/components/roadmaps/RoadmapComp'
import { apiClient } from '~/utils/apiClient'
import { Library, Roadmap } from '$prisma/client'
import { useAuth } from '~/contexts/AuthContext'
import { createLibrary } from '~/utils/libraries'
import { RoadmapCreateBody, RoadmapUpdateBody } from '~/server/types'
import { createRoadmap, updateRoadmap } from '~/utils/roadmaps'

const EditRoadmap = () => {
  const router = useRouter()
  const { roadmapId } = router.query
  const auth = useAuth()
  const onCreateLibrary = (title: Library['title'], link?: Library['link']) =>
    createLibrary(auth?.token || '', title, link)
  const onCreateRoadmap = (data: RoadmapCreateBody) =>
    createRoadmap(auth?.token || '', data)
  const onUpdateRoadmap = (id: Roadmap['id'], data: RoadmapUpdateBody) =>
    updateRoadmap(auth?.token || '', id, data)
  const roadmapIdAsNumber =
    typeof roadmapId === 'string' ? +roadmapId : undefined //TODO:適当なurlとか、他の人のロードマップとかのときを処理する
  if (!roadmapIdAsNumber) return <div>failed to load...</div>
  const { data: roadmap, error: userError } = useAspidaSWR(
    apiClient.roadmaps._roadmapId(roadmapIdAsNumber)
  )
  if (userError) return <div>failed to load</div>
  if (!roadmap) return <NavictChan text="LOADING..." /> //<div>loading...</div>
  return (
    <RoadmapComp
      defaultRoadmap={roadmap}
      onCreateLibrary={onCreateLibrary}
      onCreateRoadmap={onCreateRoadmap}
      onUpdateRoadmap={onUpdateRoadmap}
    />
  )
}

export default EditRoadmap
