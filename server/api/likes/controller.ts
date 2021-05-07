import { defineController } from './$relay'
import { toggleLike } from '$/service/likes'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 204,
    body: await toggleLike(body.userId, body.roadmapId)
  })
}))
