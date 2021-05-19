import { defineController, defineHooks } from './$relay'
import { deleteUser, getUserInfoById, updateUser } from '$/service/users'

export type AdditionalRequest = {
  user: {
    id: number
  }
}

export const hooks = defineHooks(() => ({
  onRequest: [
    (req, reply, done) => {
      if (!['PUT', 'DELETE'].includes(req.method)) return done()
      return req.jwtVerify().catch((err) => {
        console.log({
          err
        })
        return reply.send(err)
      })
    },
    (req, reply, done) => {
      if (!['PUT', 'DELETE'].includes(req.method)) return done()
      if ((req.params as { userId: number }).userId != req.user.id)
        return reply.status(403).send()
      done()
    }
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
  delete: async ({ params }) => {
    await deleteUser(params.userId)
    return { status: 204 }
  }
}))
