import { defineController } from './$relay'
import { createLike } from '$/service/likes'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createLike(body.userId, body.roadmapId)
  })
}))
