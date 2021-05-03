import { defineController } from './$relay'
import { createStep } from '$/service/steps'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createStep(
      body.memo,
      body.nextStepId,
      body.roadmapId,
      body.libraryId
    )
  })
}))
