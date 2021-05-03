import { defineController } from './$relay'
import { createLibrary } from '$/service/libraries'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createLibrary(body.title, body.link)
  })
}))
