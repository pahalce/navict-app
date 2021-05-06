import { PrismaClient } from '@prisma/client'
import { Roadmap, Step } from '$prisma/client'

const prisma = new PrismaClient()

export const getAllRoadmapsLibraryIds = async () => {
  const ids: number[][] = []
  const roadmaps = await prisma.roadmap.findMany({
    include: {
      steps: true
    }
  })
  roadmaps.map((roadmap) => {
    const steps = sortSteps(roadmap).steps
    ids.push(steps.map((s: Step) => s.id))
  })
  return ids
}

const sortSteps = (
  roadmap: Roadmap & { steps: Step[] }
): Roadmap & { steps: Step[] | [] } => {
  const sortedSteps: Step[] = []

  // 1番目のStepを追加
  const firstStep = roadmap.steps.find(
    (step) => step.id === roadmap.firstStepId
  )
  if (!firstStep) return { ...roadmap, steps: [] }
  sortedSteps.push(firstStep)

  // 2番目以降のStepを追加
  let nextStepId: Step['nextStepId'] = null
  for (let i = 0; i < roadmap.steps.length - 1; i++) {
    const nextStep = roadmap.steps.find(
      (step) => step.id === sortedSteps.slice(-1)[0].nextStepId
    )
    if (!nextStep) break
    sortedSteps.push(nextStep)
    nextStepId = nextStep?.nextStepId || null
    if (!nextStepId) break
  }

  return { ...roadmap, steps: sortedSteps }
}
