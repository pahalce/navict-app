import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthn } from '$/service/auth'
import { createRoadmap } from '$/service/roadmaps'
import { isInMethods } from '$/service/http'

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
    status: 201,
    body: await createRoadmap(
      body.title,
      body.description,
      body.forkedRoadmapId,
      body.goal,
      body.userId,
      body.tags,
      body.steps
    )
  })
}))
