import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import RoadmapInProgressCard from './RoadmapInProgressCard'

type Props = {
  userId: number
}
const RoadmapsInProgress = ({ userId }: Props) => {
  const { data: user, error } = useAspidaSWR(apiClient.users._userId(userId))
  if (error) return <div>failed to load</div>

  let cards
  if (
    user?.doingRoadmaps.length !== undefined &&
    user.doingRoadmaps.length < 3
  ) {
    cards = (
      <div className={`flex`}>
        {user?.doingRoadmaps.slice(0, 3).map((roadmap, i) => {
          return (
            <div key={i} className={`mr-20`}>
              <RoadmapInProgressCard key={i} roadmap={roadmap} />
            </div>
          )
        })}
      </div>
    )
  } else {
    cards = (
      <div className={`flex justify-between`}>
        {user?.doingRoadmaps.slice(0, 3).map((roadmap, i) => {
          return (
            <div key={i}>
              <RoadmapInProgressCard key={i} roadmap={roadmap} />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="bg-$tint">
      <div className="px-40 pb-14 mx-auto">
        <h2 className="text-$t1 text-$primary mb-8">
          取り組み中のロードマップ
        </h2>
        {cards}
      </div>
    </div>
  )
}

export default RoadmapsInProgress
