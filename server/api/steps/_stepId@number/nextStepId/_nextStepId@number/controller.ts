import { defineController } from './$relay'
import { changeNextStepId } from '$/service/steps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await changeNextStepId(params.stepId, params.nextStepId)
    return { status: 204 }
  }
}))
