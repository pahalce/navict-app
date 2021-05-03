import { defineController } from './$relay'
import { toggleIsDone } from '$/service/steps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await toggleIsDone(params.stepId)
    return { status: 204 }
  }
}))
