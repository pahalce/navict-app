import { PrismaClient } from '@prisma/client'
import { Roadmap, Step } from '$prisma/client'

const prisma = new PrismaClient()

export const getAllRoadmapsLibraryIds = async (): Promise<
  [number, number, number, number][]
> => {
  /**
   * 全roadmapを取得
   *   各rodmapのstepsを順番に並び替える
   *   4つずつ切り出してリストにして返す
   *   null => 0
   *   Goal => 1
   *
   * 例)
   * roadmap.stepsのlibraryIdが
   * 2 → 3 → 4 → 5 → 6 → 7 → 8 → 1(Goal) の順番の場合、
   * 返り値は [[0,0,0,2], [0,0,2,3], [0,2,3,4], [2,3,4,5], [3,4,5,6], [4,5,6,7], [5,6,7,8], [6,7,8,1]]
   */
  const ids: [number, number, number, number][] = []
  const roadmaps = await prisma.roadmap.findMany({
    include: {
      steps: true
    }
  })
  roadmaps.map((roadmap) => {
    const steps = sortSteps(roadmap).steps
    for (let i = 0; i < steps.length; i++) {
      ids.push([
        steps[i - 3]?.libraryId || 0,
        steps[i - 2]?.libraryId || 0,
        steps[i - 1]?.libraryId || 0,
        steps[i - 0]?.libraryId || 0
      ])
    }
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
      (step) => step.id === sortedSteps[-1]?.nextStepId
    )
    if (!nextStep) break
    sortedSteps.push(nextStep)
    nextStepId = nextStep?.nextStepId || null
    if (!nextStepId) break
  }

  return { ...roadmap, steps: sortedSteps }
}
