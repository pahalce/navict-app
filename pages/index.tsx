import useAspidaSWR from '@aspida/swr'
import RoadmapCard, { RoadmapCardType } from '$components/list/RoadmapCard'
import { apiClient, headersAuthz } from '~/utils/apiClient'
import { useAuth } from '~/contexts/AuthContext'
import RoadmapsInProgress from '~/components/list/RoadmapsInProgress'
import Image from 'next/image'
import Link from 'next/link'
import { RoadmapInfo, UserInfo } from '~/server/types'
import SearchRoadmap from '~/components/SearchRoadmap'
import { useRouter } from 'next/router'
import { pushSigninWithPrevUrl } from '~/utils/auth'
import Layout from '~/components/Layout'

const AddRoadmapBtn = () => {
  const auth = useAuth()
  const router = useRouter()
  const handleClick = () => {
    if (auth.isLoggedIn) {
      router.push('/roadmaps/new')
    } else {
      pushSigninWithPrevUrl(router)
    }
  }
  return (
    <a onClick={handleClick} className={`cursor-pointer`}>
      <div
        className={`bg-$accent1 flex w-96 h-20 items-center justify-center rounded-lg mx-auto`}
      >
        <Image src={`/pencil.svg`} width={25.79} height={25.79} />
        <p className={`text-$t2 text-$shade3 ml-3`}>新規作成</p>
      </div>
    </a>
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
    apiClient.users._userId(auth.user?.id || 0)
  )

  const handleLikeClick = async (roadmapId: RoadmapInfo['id']) => {
    if (!auth.user?.id) return
    await apiClient.likes.post({
      body: { userId: auth.user.id, roadmapId },
      config: { ...headersAuthz(auth.token) }
    })
  }

  return (
    <Layout>
      <div className="bg-$tint w-full">
        <img src="/top-mv.jpg" className={` mb-16`} />
        <div className={`${auth.isLoggedIn ? 'mb-52' : ''}`}>
          <AddRoadmapBtn />
        </div>
        {auth.isLoggedIn && auth.user && (
          <RoadmapsInProgress userId={auth.user.id} />
        )}
        {auth.isLoggedIn && (
          <div className={`mb-14`}>
            <MypageBtn />
          </div>
        )}
        <div className={`bg-$white py-28`}>
          <SearchRoadmap />
        </div>
        <div className={`py-16`}>
          <PopularRoadmaps user={user} onLikeClick={handleLikeClick} />
        </div>
      </div>
    </Layout>
  )
}

export default Home
