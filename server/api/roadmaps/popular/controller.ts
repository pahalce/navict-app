import { defineController } from './$relay'
import { getPopularRoadmapInfos } from '$/service/roadmaps'

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getPopularRoadmapInfos() })
}))
