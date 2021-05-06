import type { Step } from '$prisma/client'

export type Methods = {
  /**
   * create a step
   * ** POST /steps
   */
  post: {
    reqBody: Pick<Step, 'memo' | 'nextStepId' | 'roadmapId' | 'libraryId'>
    resBody: Step
  }
}
