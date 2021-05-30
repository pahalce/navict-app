import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthzByRoadmapId } from '$/service/auth'
import { isInMethods } from '$/service/http'
import { toggleIsDone } from '$/service/roadmaps'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['PATCH'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: [
    (req, reply, done) => {
      if (!isInMethods(req.method, ['PATCH'])) return done()
      return checkAuthzByRoadmapId(
        req,
        reply,
        done,
        (req.params as { roadmapId: number }).roadmapId
      )
    }
  ]
}))

export default defineController(() => ({
  patch: async ({ params }) => {
    await toggleIsDone(params.roadmapId)
    return { status: 204 }
  }
}))
