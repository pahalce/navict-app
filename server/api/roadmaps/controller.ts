import { defineController } from './$relay'
import { createRoadmap } from '$/service/roadmaps'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createRoadmap(
      body.title,
      body.description,
      body.forkedRoadmapId,
      body.firstStepId,
      body.userId
    )
  })
}))
