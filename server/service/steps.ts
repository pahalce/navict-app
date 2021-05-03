import { PrismaClient } from '@prisma/client'
import type { Prisma, Step } from '$prisma/client'

const prisma = new PrismaClient()

export const createStep = (
  memo: Step['memo'],
  nextStepId: Step['nextStepId'],
  roadmapId: Step['roadmapId'],
  libraryId: Step['libraryId']
) => prisma.step.create({ data: { memo, nextStepId, roadmapId, libraryId } })

// FIXME: navict-recommenderに問い合わせる様に変更する。
export const getRecommendedSteps = async (libraryIds: number[]) =>
  (await prisma.step.findMany()).slice(0, 3).map((step) => {
    return {
      ...step,
      score: 50
    }
  })

export const updateStep = (
  id: Step['id'],
  partialStep: Prisma.StepUpdateInput
) => prisma.step.update({ where: { id }, data: partialStep })

export const deleteStep = (id: Step['id']) =>
  prisma.step.delete({ where: { id } })

export const updateNextStepId = (
  id: Step['id'],
  nextStepId: Step['nextStepId']
) => prisma.step.update({ where: { id }, data: { nextStepId } })

export const toggleIsDone = async (id: Step['id']) => {
  const step = await prisma.step.findUnique({ where: { id } })
  await prisma.step.update({ where: { id }, data: { isDone: !step?.isDone } })
}
