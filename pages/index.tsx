import useAspidaSWR from '@aspida/swr'
import RoadmapCard, { RoadmapCardType } from '$components/list/RoadmapCard'
import { apiClient } from '~/utils/apiClient'
import { useAuth } from '~/contexts/AuthContext'
import RoadmapsInProgress from '~/components/list/RoadmapsInProgress'
import Image from 'next/image'
import Link from 'next/link'
import { RoadmapInfo, UserInfo } from '~/server/types'

const SearchRoadmap = () => {
  return (
    <div className="px-40 mx-auto">
      <h2 className="text-$t1 text-$primary mb-4">
        ロードマップを見つける
        <span className="text-$t5"> 気になるワードで検索してみよう</span>
      </h2>
      <form>
        <input
          type="text"
          placeholder="Javascript"
          className="w-full py-4 px-5 rounded-md text-$t4 text-$primary placeholder-$shade1 border-$shade2 border-4"
        />
      </form>
    </div>
  )
}

const AddRoadmapBtn = () => {
  return (
    <Link href={`/roadmaps/new`}>
      <a>
        <div
          className={`bg-$accent1 flex w-96 h-20 items-center justify-center rounded-lg mx-auto`}
        >
          <Image src={`/pencil.svg`} width={25.79} height={25.79} />
          <p className={`text-$t2 text-$shade3 ml-3`}>新規作成</p>
        </div>
      </a>
    </Link>
  )
}

const MypageBtn = () => {
  return (
    <Link href={`/mypage`}>
      <a>
        <div
          className={`flex w-96 h-20 items-center justify-center rounded-lg mx-auto border-4 border-$accent1`}
        >
          <Image src={`/man.svg`} width={26.02} height={26.01} />
          <p className={`text-$t2 text-$accent1 ml-3`}>マイページへ</p>
        </div>
      </a>
    </Link>
  )
}

type PopularRoadmapsProps = {
  user: UserInfo | undefined
  onLikeClick: (roadmapId: RoadmapInfo['id']) => void
}
const PopularRoadmaps = ({ user, onLikeClick }: PopularRoadmapsProps) => {
  const { data: roadmaps, error } = useAspidaSWR(apiClient.roadmaps.popular)
  if (error) return <div>failed to load</div>
  return (
    <div className="px-48 mx-auto">
      <h2 className="text-$primary text-$t1 text-center mb-14">
        人気のロードマップ
      </h2>
      {roadmaps?.map((roadmap, i) => (
        <div key={i} className={`mb-10`}>
          <RoadmapCard
            key={i}
            type={RoadmapCardType.LIKE}
            roadmap={roadmap}
            isLiked={!!user?.likeRoadmaps.find((r) => r.id === roadmap.id)}
            onToggleLike={onLikeClick}
          />
        </div>
      ))}
    </div>
  )
}

const Home = () => {
  const auth = useAuth()

  const { data: user, error } = useAspidaSWR(
    apiClient.users._userId(auth?.user?.id || 0)
  )

  const handleLikeClick = async (roadmapId: RoadmapInfo['id']) => {
    if (!auth?.user?.id) return
    await apiClient.likes.post({ body: { userId: auth.user.id, roadmapId } })
  }

  return (
    <div className="bg-$tint w-full">
      <img src="/top-mv.jpg" className={` mb-16`} />
      <div className={`mb-52`}>
        <AddRoadmapBtn />
      </div>
      {auth?.user && <RoadmapsInProgress userId={auth.user.id} />}
      <div className={`mb-14`}>
        <MypageBtn />
      </div>
      <div className={`bg-$white py-28`}>
        <SearchRoadmap />
      </div>
      <div className={`py-16`}>
        <PopularRoadmaps user={user} onLikeClick={handleLikeClick} />
      </div>
    </div>
  )
}

export default Home
