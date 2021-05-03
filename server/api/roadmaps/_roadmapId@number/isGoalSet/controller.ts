import { defineController } from './$relay'
import { toggleIsGoalSet } from '$/service/roadmaps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await toggleIsGoalSet(params.roadmapId)
    return { status: 204 }
  }
}))
