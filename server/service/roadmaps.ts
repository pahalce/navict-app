import { PrismaClient } from '@prisma/client'
import type { Prisma, Roadmap, User } from '$prisma/client'
import type { RoadmapInfo } from '$/types'
import { partialRoadmapInfoInclude } from '$/prisma/options'

type partialRoadmapInfo = Omit<
  RoadmapInfo,
  'forkedCount' | 'likedCount' | 'donePercent'
>

const prisma = new PrismaClient()

export const createRoadmap = (
  title: Roadmap['title'],
  description: Roadmap['description'],
  forkedRoadmapId: Roadmap['forkedRoadmapId'],
  firstStepId: Roadmap['firstStepId'],
  userId: Roadmap['userId']
) =>
  prisma.roadmap.create({
    data: { title, description, forkedRoadmapId, firstStepId, userId }
  })

/**
 * FIXME:
 * とりあえずいいね順で10件とってきてる。
 * 何が人気なのか仕様固めたらロジック変更する。
 */
export const getPopularRoadmapInfos = async (): Promise<RoadmapInfo[]> => {
  const popularRoadmapInfos: RoadmapInfo[] = []

  const popularRoadmaps = (
    await prisma.roadmap.findMany({
      orderBy: {
        likes: {
          count: 'desc'
        }
      }
    })
  ).slice(0, 10)

  for (const popularRoadmap of popularRoadmaps) {
    const popularRoadmapInfo = await getRoadmapInfoById(popularRoadmap.id)
    if (!popularRoadmapInfo) continue
    popularRoadmapInfos.push(popularRoadmapInfo)
  }

  return popularRoadmapInfos
}

export const searchRoadmapInfos = async (
  keyword: string
): Promise<RoadmapInfo[]> => {
  const roadmapInfos: RoadmapInfo[] = []
  const tags = await prisma.tag.findMany({
    where: {
      name: {
        contains: keyword
      }
    },
    include: {
      roadmaps: true
    }
  })
  const roadmaps = await prisma.roadmap.findMany({
    where: {
      title: {
        contains: keyword
      }
    }
  })
  tags.forEach((tag) => roadmaps.push(...tag.roadmaps))
  for (const roadmap of roadmaps) {
    const roadmapInfo = await getRoadmapInfoById(roadmap.id)
    if (!roadmapInfo) continue
    roadmapInfos.push(roadmapInfo)
  }
  return roadmapInfos
}

export const getRoadmapById = (id: Roadmap['id']) =>
  prisma.roadmap.findUnique({ where: { id } })

export const updateRoadmap = (
  id: Roadmap['id'],
  partialRoadmap: Prisma.RoadmapUpdateInput
) => prisma.roadmap.update({ where: { id }, data: partialRoadmap })

export const deleteRoadmap = (id: Roadmap['id']) =>
  prisma.roadmap.delete({ where: { id } })

export const changeFirstStepId = (
  id: Roadmap['id'],
  firstStepId: Roadmap['firstStepId']
) => prisma.roadmap.update({ where: { id }, data: { firstStepId } })

export const toggleIsGoalSet = async (id: Roadmap['id']) => {
  const roadmap = await prisma.roadmap.findUnique({ where: { id } })
  await prisma.roadmap.update({
    where: { id },
    data: { isGoalSet: !roadmap?.isGoalSet }
  })
}

export const toggleIsDone = async (id: Roadmap['id']) => {
  const roadmap = await prisma.roadmap.findUnique({ where: { id } })
  await prisma.roadmap.update({
    where: { id },
    data: { isDone: !roadmap?.isDone }
  })
}

export const getRoadmapInfosByUserId = async (
  userId: User['id']
): Promise<RoadmapInfo[]> => {
  const partialRoadmapInfos: partialRoadmapInfo[] = await prisma.roadmap.findMany(
    {
      where: { userId },
      include: partialRoadmapInfoInclude
    }
  )
  return makeRoadmapInfos(partialRoadmapInfos)
}

export const getRoadmapInfoById = async (id: Roadmap['id']) => {
  const partialRoadmapInfo: partialRoadmapInfo | null = await prisma.roadmap.findFirst(
    {
      where: { id },
      include: partialRoadmapInfoInclude
    }
  )
  if (!partialRoadmapInfo) return null
  return makeRoadmapInfo(partialRoadmapInfo)
}

const makeRoadmapInfos = async (
  partialRoadmapInfos: partialRoadmapInfo[]
): Promise<RoadmapInfo[]> => {
  const roadmapInfos: RoadmapInfo[] = []
  for (const partialRoadmapInfo of partialRoadmapInfos) {
    roadmapInfos.push(await makeRoadmapInfo(partialRoadmapInfo))
  }
  return roadmapInfos
}

const makeRoadmapInfo = async (
  partialRoadmapInfo: partialRoadmapInfo
): Promise<RoadmapInfo> => {
  const forkedCount = await prisma.roadmap.count({
    where: {
      forkedRoadmapId: partialRoadmapInfo.id
    }
  })
  const likedCount = await prisma.like.count({
    where: {
      roadmapId: partialRoadmapInfo.id
    }
  })
  let donePercent = 0
  if (partialRoadmapInfo.steps.length > 0) {
    donePercent =
      (partialRoadmapInfo.steps.filter((step) => step.isDone).length /
        partialRoadmapInfo.steps.length) *
      100
  }
  return {
    ...partialRoadmapInfo,
    forkedCount,
    likedCount,
    donePercent
  }
}
