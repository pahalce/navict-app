import { PrismaClient } from '@prisma/client'
import type { Roadmap, Step, Tag, User } from '$prisma/client'
import type { RoadmapInfo, StepInfo } from '$/types'
import { partialRoadmapInfoInclude } from '$/prisma/options'
import type { UpdateRoadmapReqBody } from '$/api/roadmaps/_roadmapId@number/index'

type partialRoadmapInfo = Omit<
  RoadmapInfo,
  'forkedCount' | 'likedCount' | 'donePercent'
>

const prisma = new PrismaClient()

// FIXME: ここの実装適当すぎるからバグったら直す。
export const createRoadmap = async (
  title: Roadmap['title'],
  description: Roadmap['description'],
  forkedRoadmapId: Roadmap['forkedRoadmapId'],
  goal: Roadmap['goal'],
  userId: Roadmap['userId'],
  tags: Pick<Tag, 'name'>[],
  steps: Pick<Step, 'memo' | 'isDone' | 'libraryId'>[]
) => {
  /**
   * FIXME:
   * "\nInvalid `prisma.roadmap.create()` invocation:\n\n\n  Unique constraint failed on the fields: (`id`)"
   * 上記のエラーが出たのでしたのような実装になってる。
   * 直したい。
   */
  const lastRoadmap = (
    await prisma.roadmap.findMany({
      orderBy: {
        id: 'desc'
      }
    })
  ).slice(0)[0]
  const roadmap = await prisma.roadmap.create({
    data: {
      id: lastRoadmap.id + 1,
      title,
      description,
      forkedRoadmapId,
      userId,
      goal
    }
  })

  // FIXME: エラーでる…直して…。
  // await prisma.roadmap.update({
  //   where: {
  //     id: roadmap.id
  //   },
  //   data: {
  //     tags: {
  //       connect: tags.map((t) => ({ name: t.name }))
  //     }
  //   }
  // })

  let lastStep = (
    await prisma.step.findMany({
      orderBy: {
        id: 'desc'
      }
    })
  ).slice(0)[0]
  let nextStepId = null
  for (let i = 0; i < steps.length; i++) {
    const reqStep = steps[steps.length - i - 1]
    lastStep = await prisma.step.create({
      data: {
        id: lastStep.id + 1,
        memo: reqStep.memo,
        nextStepId: nextStepId,
        isDone: reqStep.isDone,
        roadmapId: roadmap.id,
        libraryId: reqStep.libraryId
      }
    })
    if (i === steps.length - 1) {
      // 最初のstep
      await prisma.roadmap.update({
        where: { id: roadmap.id },
        data: {
          firstStepId: lastStep.id
        }
      })
    } else {
      // それ以外のstep
      nextStepId = lastStep.id
    }
  }

  return roadmap
}

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

// FIXME: ここの実装適当すぎるからバグったら直す。
export const updateRoadmap = async (
  id: Roadmap['id'],
  body: UpdateRoadmapReqBody
) => {
  const roadmap = await prisma.roadmap.update({
    where: { id },
    data: {
      title: body.title,
      description: body.description,
      forkedRoadmapId: body.forkedRoadmapId,
      firstStepId: body.firstStepId,
      userId: body.userId
    }
  })

  await prisma.roadmap.update({
    where: {
      id: roadmap.id
    },
    data: {
      tags: {
        connect: body.tags?.map((t) => ({ name: t.name }))
      }
    }
  })

  // FIXME: stepのいいねとかを導入するときに、この実装だとバグる。
  await prisma.step.deleteMany({
    where: {
      roadmapId: roadmap.id
    }
  })
  await prisma.step.createMany({
    data: body.steps
      ? body.steps?.map((s) => ({
          memo: s.memo,
          nextStepId: s.nextStepId,
          isDone: s.isDone,
          roadmapId: roadmap.id,
          libraryId: s.libraryId
        }))
      : []
  })
  return roadmap
}

export const deleteRoadmap = (id: Roadmap['id']) =>
  prisma.roadmap.delete({ where: { id } })

export const changeFirstStepId = (
  id: Roadmap['id'],
  firstStepId: Roadmap['firstStepId']
) => prisma.roadmap.update({ where: { id }, data: { firstStepId } })

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
  return sortSteps(await makeRoadmapInfo(partialRoadmapInfo))
}

// FIXME: $/service/navictRecommender.tsのsortStepsとかぶってるのでリファクタする
const sortSteps = (roadmapInfo: RoadmapInfo): RoadmapInfo => {
  const sortedSteps: StepInfo[] = []

  // 1番目のStepを追加
  const firstStep = roadmapInfo.steps.find(
    (step) => step.id === roadmapInfo.firstStepId
  )
  if (!firstStep) return { ...roadmapInfo, steps: [] }
  sortedSteps.push(firstStep)

  // 2番目以降のStepを追加
  let nextStepId: Step['nextStepId'] = null
  for (let i = 0; i < roadmapInfo.steps.length - 1; i++) {
    const nextStep = roadmapInfo.steps.find(
      (step) => step.id === sortedSteps.slice(-1)[0].nextStepId
    )
    if (!nextStep) break
    sortedSteps.push(nextStep)
    nextStepId = nextStep?.nextStepId || null
    if (!nextStepId) break
  }

  return { ...roadmapInfo, steps: sortedSteps }
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
