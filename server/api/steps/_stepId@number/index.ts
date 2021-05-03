import type { Step } from '$prisma/client'

type UpdateStepBody = Partial<
  Pick<Step, 'memo' | 'nextStepId' | 'isDone' | 'roadmapId' | 'libraryId'>
>
export type Methods = {
  // update a step
  put: {
    reqBody: UpdateStepBody
    resBody: Step
  }

  // delete a step
  delete: {
    status: 204
  }
}
