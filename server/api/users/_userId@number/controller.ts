import { defineController, defineHooks } from './$relay'
import { deleteUser, getUserInfoById, updateUser } from '$/service/users'
import { checkAuthz, checkAuthn } from '$/service/auth'

export type AdditionalRequest = {
  user: {
    id: number
  }
}

export const hooks = defineHooks(() => ({
  onRequest: [
    (req, reply, done) => checkAuthz(req, reply, done, ['PUT', 'DELETE']),
    (req, reply, done) =>
      checkAuthn(
        req,
        reply,
        done,
        ['PUT', 'DELETE'],
        (req.params as { userId: number }).userId,
        req.user.id
      )
  ]
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
  delete: async ({ params, user }) => {
    console.log(user)
    await deleteUser(params.userId)
    return { status: 204 }
  }
}))
