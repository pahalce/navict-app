import { defineController } from './$relay'
import { deleteLike } from '$/service/likes'

export default defineController(() => ({
  delete: async ({ params }) => {
    await deleteLike(params.likeId)
    return { status: 204 }
  }
}))
