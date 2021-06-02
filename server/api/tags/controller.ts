import { defineController, defineHooks } from './$relay'
import { checkJwt } from '$/service/auth'
import { createTag } from '$/service/tags'
import { isInMethods } from '$/service/http'

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['POST'])) return done()
    return checkJwt(req, reply)
  }
}))

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createTag(body.name)
  })
}))
