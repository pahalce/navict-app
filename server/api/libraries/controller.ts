import { defineController, defineHooks } from './$relay'
import { checkJwt } from '$/service/auth'
import { isInMethods } from '$/service/http'
import { createLibrary } from '$/service/libraries'

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['POST'])) return done()
    return checkJwt(req, reply)
  }
}))

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createLibrary(body.title, body.link)
  })
}))
