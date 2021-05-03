import { defineController } from './$relay'
import { updateNextStepId } from '$/service/steps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await updateNextStepId(params.stepId, params.nextStepId)
    return { status: 204 }
  }
}))
