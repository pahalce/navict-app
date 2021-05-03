import { defineController } from './$relay'
import { searchRoadmaps } from '$/service/roadmaps'

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await searchRoadmaps(params.keyword)
  })
}))
