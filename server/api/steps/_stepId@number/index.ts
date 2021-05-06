import type { Step } from '$prisma/client'

export type Methods = {
  /**
   * update a step
   * ** PUT /steps/_stepId@number
   */
  put: {
    reqBody: Partial<
      Pick<Step, 'memo' | 'nextStepId' | 'roadmapId' | 'libraryId'>
    >
    resBody: Step
  }

  /**
   * delete a step
   * ** DELETE /steps/_stepId@number
   */
  delete: {
    status: 204
  }
}
