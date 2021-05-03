import { defineController } from './$relay'
import { getPopularRoadmaps } from '$/service/roadmaps'

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getPopularRoadmaps() })
}))
