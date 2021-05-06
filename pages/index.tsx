import useAspidaSWR from '@aspida/swr'
import RoadmapCard from '$components/list/RoadmapCard'
import { apiClient } from '~/utils/apiClient'

const SearchRoadmap = () => {
  return (
    <div className="px-40 py-20 mx-auto">
      <h2 className="text-$t1 text-$primary mb-4">
        ロードマップを見つける
        <span className="text-$t5"> 気になるワードで検索してみよう</span>
      </h2>
      <form className="">
        <input
          type="text"
          placeholder="Javascript"
          className="w-full py-2 px-8 border-2 border-$grey border-opacity-5 rounded-md text-$t4 text-$shade1"
        />
      </form>
    </div>
  )
}

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
      <SearchRoadmap />
      <PopularRoadmaps />
    </div>
  )
}

export default Home
