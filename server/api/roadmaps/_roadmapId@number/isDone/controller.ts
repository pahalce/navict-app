import { defineController } from './$relay'
import { toggleIsDone } from '$/service/roadmaps'

export default defineController(() => ({
  patch: async ({ params }) => {
    await toggleIsDone(params.roadmapId)
    return { status: 204 }
  }
}))
