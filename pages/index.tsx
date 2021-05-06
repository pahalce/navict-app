import useAspidaSWR from '@aspida/swr'
import RoadmapCard from '$components/list/RoadmapCard'
import { apiClient } from '~/utils/apiClient'

const Home = () => {
  const { data: roadmaps, error } = useAspidaSWR(apiClient.roadmaps.popular)
  if (error) return <div>failed to load</div>
  return (
    <div>
      <h1 className="px-10">navictのロードマップでなんちゃららしよう。</h1>
      <div className="bg-$tint w-full">
        <div className="roadmaps px-48 mx-auto">
          <h2 className="text-$primary text-$t1 text-center pt-4">
            人気のロードマップ
          </h2>
          {roadmaps?.map((roadmap) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
