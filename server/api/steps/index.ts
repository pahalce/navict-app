import type { Step } from '$prisma/client'

export type Methods = {
  // create a step
  post: {
    reqBody: Pick<Step, 'memo' | 'nextStepId' | 'roadmapId' | 'libraryId'>
    resBody: Step
  }
}
