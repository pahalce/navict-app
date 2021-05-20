import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthn } from '$/service/auth'
import { deleteUser, getUserInfoById, updateUser } from '$/service/users'
import { isInMethods } from '$/service/http'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['PUT', 'DELETE'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: (req, reply, done) => {
    if (!isInMethods(req.method, ['PUT', 'DELETE'])) return done()
    return checkAuthn(
      req,
      reply,
      done,
      (req.params as { userId: number }).userId
    )
  }
}))

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await getUserInfoById(params.userId)
    if (!user) {
      return { status: 404 }
    }
    return { status: 200, body: user }
  },
  put: async ({ body, params }) => {
    return { status: 200, body: await updateUser(params.userId, body) }
  },
  delete: async ({ params }) => {
    await deleteUser(params.userId)
    return { status: 204 }
  }
}))
