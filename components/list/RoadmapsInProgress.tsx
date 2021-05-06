import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import RoadmapInProgressCard from './RoadmapInProgressCard'

type Props = {
  userId: number
}
const RoadmapsInProgress = ({ userId }: Props) => {
  const { data: user, error } = useAspidaSWR(apiClient.users._userId(1))
  if (error) return <div>failed to load</div>
  return (
    <div className="bg-$tint">
      <div className="px-40 py-20 mx-auto">
        <h2 className="text-$t1 text-$primary mb-4">
          取り組み中のロードマップ
        </h2>
        <div className="flex justify-between">
          {user?.doingRoadmaps.slice(0, 3).map((roadmap) => (
            <RoadmapInProgressCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoadmapsInProgress
