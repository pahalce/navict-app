import { defineController } from './$relay'
import { deleteUser, getUser, updateUser } from '$/service/users'

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await getUser(params.userId)
    if (!user) {
      return { status: 404 }
    }
    return { status: 200, body: user }
  },
  put: async ({ body, params }) => {
    const user = await updateUser(params.userId, body)
    return { status: 200, body: user }
  },
  delete: async ({ params }) => {
    await deleteUser(params.userId)
    return { status: 204 }
  }
}))
