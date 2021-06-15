import useAspidaSWR from '@aspida/swr'
import { useRouter } from 'next/router'
import Layout from '~/components/Layout'
import RoadmapCard, { RoadmapCardType } from '~/components/list/RoadmapCard'
import SearchRoadmap from '~/components/SearchRoadmap'
import { useAuth } from '~/contexts/AuthContext'
import { RoadmapInfo } from '~/server/types'
import { apiClient, headersAuthz } from '~/utils/apiClient'

const SearchPage = () => {
  const router = useRouter()
  const { keyword } = router.query

  const auth = useAuth()
  const { data: user, error: userError } = useAspidaSWR(
    apiClient.users._userId(auth.user?.id || 0)
  )

  const { data: roadmaps, error: roadmapsError } = useAspidaSWR(
    apiClient.roadmaps.search._keyword(
      typeof keyword === 'string' ? keyword : ''
    )
  )

  const handleToggleLike = async (roadmapId: RoadmapInfo['id']) => {
    if (!user) return
    await apiClient.likes.post({
      body: { userId: user.id, roadmapId },
      config: { ...headersAuthz(auth.token) }
    })
  }

  return (
    <Layout>
      <div>
        <div className={`my-14`}>
          <SearchRoadmap />
        </div>

        <div className={`bg-$tint py-14`}>
          <div className={`max-w-5xl mx-auto`}>
            <p className={`text-$primary text-$t1 mb-10`}>{`検索結果: ${
              roadmaps?.length || 0
            }件`}</p>
            {roadmaps?.map((roadmap, i) => (
              <div key={i} className={`mb-11`}>
                <RoadmapCard
                  type={RoadmapCardType.LIKE}
                  roadmap={roadmap}
                  isLiked={
                    !!user?.likeRoadmaps.find((r) => r.id === roadmap.id)
                  }
                  onToggleLike={handleToggleLike}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SearchPage
