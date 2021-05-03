import { defineController } from './$relay'
import { updateStep, deleteStep } from '$/service/steps'

export default defineController(() => ({
  put: async ({ params, body }) => ({
    status: 200,
    body: await updateStep(params.stepId, body)
  }),
  delete: async ({ params }) => {
    await deleteStep(params.stepId)
    return { status: 204 }
  }
}))
