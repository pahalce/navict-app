import { defineController } from './$relay'
import { getAllRoadmapsLibraryIds } from '$/service/navictRecommender'

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getAllRoadmapsLibraryIds() })
}))
