import useAspidaSWR from '@aspida/swr'
import { useRouter } from 'next/router'
import NavictChan from '~/components/NavictChan'
import Roadmap from '~/components/roadmaps/Roadmap'
import { apiClient } from '~/utils/apiClient'

const EditRoadmap = () => {
  const router = useRouter()
  const { roadmapId } = router.query
  const roadmapIdAsNumber =
    typeof roadmapId === 'string' ? +roadmapId : undefined //TODO:適当なurlとか、他の人のロードマップとかのときを処理する
  if (!roadmapIdAsNumber) return <div>failed to load...</div>
  const { data: roadmap, error: userError } = useAspidaSWR(
    apiClient.roadmaps._roadmapId(roadmapIdAsNumber)
  )
  if (userError) return <div>failed to load</div>
  if (!roadmap) return <NavictChan text="LOADING..." /> //<div>loading...</div>
  return <Roadmap defaultRoadmap={roadmap} />
}

export default EditRoadmap
