import { PrismaClient } from '@prisma/client'
import type { Prisma, Roadmap, Step } from '$prisma/client'

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

// FIXME: 人気順のロードマップを取得するように実装を変更する。
export const getPopularRoadmaps = async () =>
  (await prisma.roadmap.findMany()).slice(0, 10)

export const searchRoadmaps = async (keyword: string) => {
  const roadmaps = await prisma.roadmap.findMany({
    where: {
      title: {
        contains: keyword
      }
    }
  })
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
  tags.map((tag) => {
    roadmaps.push(...tag.roadmaps)
  })
  return roadmaps
}

export const getRoadmap = (id: Roadmap['id']) =>
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

export const sortSteps = async (
  roadmap: Roadmap & { steps: Step[] }
): Promise<Roadmap & { steps: Step[] | [] }> => {
  const sortedSteps: Step[] = []

  // 1番目のStepを追加
  const firstStep = roadmap.steps.find(
    (step) => step.id === roadmap.firstStepId
  )
  if (!firstStep) return { ...roadmap, steps: [] }
  sortedSteps.push(firstStep)

  // 2番目以降のStepを追加
  for (let i = 0; i < roadmap.steps.length - 1; i++) {
    const nextStep = roadmap.steps.find(
      (step) => step.id === sortedSteps[-1]?.nextStepId
    )
    if (!nextStep) continue
    sortedSteps.push(nextStep)
  }

  return { ...roadmap, steps: sortedSteps }
}
