import { PrismaClient } from '@prisma/client'
import { sortSteps } from '$/service/roadmaps'

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
  let ids: [number, number, number, number][] = []
  const roadmaps = await prisma.roadmap.findMany({
    include: {
      steps: true
    }
  })
  await roadmaps.map(async (roadmap) => {
    const steps = (await sortSteps(roadmap)).steps
    await [...Array(steps.length)].map((_, i) => {
      ids = [
        ...ids,
        [
          steps[i - 3]?.libraryId || 0,
          steps[i - 2]?.libraryId || 0,
          steps[i - 1]?.libraryId || 0,
          steps[i - 0]?.libraryId || 0
        ]
      ]
    })
  })
  return ids
}
