import { defineController } from './$relay'
import { changeFirstStepId } from '$/service/roadmaps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await changeFirstStepId(params.roadmapId, params.firstStepId)
    return { status: 204 }
  }
}))
