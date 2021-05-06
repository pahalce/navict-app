import { defineController } from './$relay'
import { searchRoadmapInfos } from '$/service/roadmaps'

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await searchRoadmapInfos(params.keyword)
  })
}))
