import { defineController } from './$relay'
import { changeMemo } from '$/service/steps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await changeMemo(params.stepId, params.memo)
    return { status: 204 }
  }
}))
