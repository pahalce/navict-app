import { defineController } from './$relay'
import { createTag } from '$/service/tags'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createTag(body.name)
  })
}))
