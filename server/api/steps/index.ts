import { StepCreateBody } from '$/types'
import type { Step } from '$prisma/client'

export type Methods = {
  /**
   * create a step
   * [jz] POST /steps
   */
  post: {
    reqBody: StepCreateBody
    resBody: Step
  }
}
