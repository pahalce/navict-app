import { defineController, defineHooks } from './$relay'
import { createTag } from '$/service/tags'
import { checkAuthz } from '$/service/auth'

export const hooks = defineHooks(() => ({
  onRequest: [(req, reply, done) => checkAuthz(req, reply, done, ['POST'])]
}))

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createTag(body.name)
  })
}))
