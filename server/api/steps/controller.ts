import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthzByRoadmapId } from '$/service/auth'
import { isInMethods } from '$/service/http'
import { createStep } from '$/service/steps'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['POST'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: (req, reply, done) => {
    if (!isInMethods(req.method, ['POST'])) return done()
    return checkAuthzByRoadmapId(
      req,
      reply,
      done,
      (req.body as { roadmapId: number }).roadmapId
    )
  }
}))

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createStep(
      body.memo,
      body.nextStepId,
      body.isDone,
      body.roadmapId,
      body.libraryId
    )
  })
}))
