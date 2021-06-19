import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthzByStepId } from '$/service/auth'
import { isInMethods } from '$/service/http'
import { toggleIsDone } from '$/service/steps'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['PATCH'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: (req, reply, done) => {
    if (!isInMethods(req.method, ['PATCH'])) return done()
    return checkAuthzByStepId(
      req,
      reply,
      done,
      (req.params as { stepId: number }).stepId
    )
  }
}))

export default defineController(() => ({
  patch: async ({ params }) => {
    await toggleIsDone(params.stepId)
    return { status: 204 }
  }
}))
