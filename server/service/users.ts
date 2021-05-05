import { PrismaClient } from '@prisma/client'
import type { Like, Prisma, User } from '$prisma/client'
import * as admin from 'firebase-admin'
import { getRoadmapInfosByUserId, getRoadmapInfoById } from '$/service/roadmaps'
import type { RoadmapInfo } from '$/types'
import { userWithoutPersonalSelect } from '$/prisma/options'

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  })
})

const prisma = new PrismaClient()

export const veriyfyUserViaFirebase = async (idToken: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    const user = await admin.auth().getUser(decodedToken.uid)
    return user
  } catch (error) {
    // no verified user
    console.log('verify-error', error)
    return null
  }
}

export const getUserById = (id: User['id']) =>
  prisma.user.findUnique({ where: { id } })

export const getUserInfoById = async (id: User['id']) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      ...userWithoutPersonalSelect,
      likes: true
    }
  })
  if (!user) return null

  const roadmapInfos = await getRoadmapInfosByUserId(id)
  const doingRoadmaps = roadmapInfos.filter((r) => !r.isDone)
  const doneRoadmaps = roadmapInfos.filter((r) => r.isDone)
  const doneRoadmapsCount = doneRoadmaps.length

  const likeRoadmaps = await getLikeRoadmaps(user.likes)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { likes, ...userWithPersonal } = user

  const totalLikedCount = await getTotalLikedCountByUserId(id)

  return {
    ...userWithPersonal,
    doingRoadmaps,
    doneRoadmaps,
    likeRoadmaps,
    doneRoadmapsCount,
    totalLikedCount
  }
}

export const updateUser = (
  userId: User['id'],
  partialUser: Prisma.UserUpdateInput
) => {
  return prisma.user.update({
    where: {
      id: userId
    },
    data: partialUser
  })
}

// TODO: firebaseのアカウントも削除する
export const deleteUser = (id: User['id']) => {
  prisma.user.delete({ where: { id } })
}

const getLikeRoadmaps = async (likes: Like[]): Promise<RoadmapInfo[]> => {
  const likeRoadmaps: RoadmapInfo[] = []
  for (const like of likes) {
    const roadmapInfo = await getRoadmapInfoById(like.roadmapId)
    if (!roadmapInfo) continue
    likeRoadmaps.push(roadmapInfo)
  }
  return likeRoadmaps
}

const getTotalLikedCountByUserId = async (id: User['id']): Promise<number> => {
  let likedCount = 0
  const roadmaps = await prisma.roadmap.findMany({
    where: { userId: id }
  })
  for (const roadmap of roadmaps) {
    likedCount += await prisma.like.count({
      where: { roadmapId: roadmap.id }
    })
  }
  return likedCount
}
