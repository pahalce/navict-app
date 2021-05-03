import { defineController } from './$relay'
import { getRoadmap, updateRoadmap, deleteRoadmap } from '$/service/roadmaps'

export default defineController(() => ({
  get: async ({ params }) => {
    const roadmap = await getRoadmap(params.roadmapId)
    if (!roadmap) {
      return { status: 404 }
    }
    return { status: 200, body: roadmap }
  },
  put: async ({ params, body }) => ({
    status: 200,
    body: await updateRoadmap(params.roadmapId, body)
  }),
  delete: async ({ params }) => {
    await deleteRoadmap(params.roadmapId)
    return { status: 204 }
  }
}))
