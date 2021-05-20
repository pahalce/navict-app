// FIXME: nextStepIdが自分のものかチェックする

import { PrismaClient } from '@prisma/client'
import type { Prisma, Step } from '$prisma/client'

const prisma = new PrismaClient()

export const createStep = (
  memo: Step['memo'],
  nextStepId: Step['nextStepId'],
  isDone: Step['isDone'],
  roadmapId: Step['roadmapId'],
  libraryId: Step['libraryId']
) =>
  prisma.step.create({
    data: { memo, nextStepId, isDone, roadmapId, libraryId }
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

export const changeMemo = (id: Step['id'], memo: Step['memo']) =>
  prisma.step.update({
    where: { id },
    data: { memo }
  })

export const changeNextStepId = (
  id: Step['id'],
  nextStepId: Step['nextStepId']
) =>
  prisma.step.update({
    where: { id },
    data: { nextStepId }
  })

export const toggleIsDone = async (id: Step['id']) => {
  const step = await prisma.step.findUnique({ where: { id } })
  if (!step) return
  await prisma.step.update({
    where: { id: step.id },
    data: { isDone: !step.isDone }
  })
}

export const getUserIdByStepId = async (id: Step['id']) => {
  const step = await prisma.step.findUnique({
    where: { id },
    include: { roadmap: true }
  })
  return step?.roadmap.userId
}
