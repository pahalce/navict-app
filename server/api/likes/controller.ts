import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthn } from '$/service/auth'
import { isInMethods } from '$/service/http'
import { toggleLike } from '$/service/likes'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['POST'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: (req, reply, done) => {
    if (!isInMethods(req.method, ['POST'])) return done()
    return checkAuthn(req, reply, done, (req.body as { userId: number }).userId)
  }
}))

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 204,
    body: await toggleLike(body.userId, body.roadmapId)
  })
}))
