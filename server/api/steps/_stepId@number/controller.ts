import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthzByStepId } from '$/service/auth'
import { isInMethods } from '$/service/http'
import { updateStep, deleteStep } from '$/service/steps'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['PUT', 'DELETE'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: (req, reply, done) => {
    if (!isInMethods(req.method, ['PUT', 'DELETE'])) return done()
    return checkAuthzByStepId(
      req,
      reply,
      done,
      (req.params as { stepId: number }).stepId
    )
  }
}))

export default defineController(() => ({
  put: async ({ params, body }) => ({
    status: 200,
    body: await updateStep(params.stepId, body)
  }),
  delete: async ({ params }) => {
    await deleteStep(params.stepId)
    return { status: 204 }
  }
}))
