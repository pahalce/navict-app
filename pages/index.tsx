import useAspidaSWR from '@aspida/swr'
import RoadmapCard from '$components/list/RoadmapCard'
import { apiClient } from '~/utils/apiClient'

const PopularRoadmaps = () => {
  const { data: roadmaps, error } = useAspidaSWR(apiClient.roadmaps.popular)
  if (error) return <div>failed to load</div>
  return (
    <div className="px-48 mx-auto">
      <h2 className="text-$primary text-$t1 text-center pt-4">
        人気のロードマップ
      </h2>
      {roadmaps?.map((roadmap) => (
        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
      ))}
    </div>
  )
}

const Home = () => {
  return (
    <div className="bg-$tint w-full pb-36">
      <h1 className="px-10">navictのロードマップでなんちゃららしよう。</h1>
      <PopularRoadmaps />
    </div>
  )
}

export default Home
