import { defineController } from './$relay'
import { PrismaClient } from '@prisma/client'
import { veriyfyUserViaFirebase, createUser } from '$/service/users'

const expiresIn = 60 * 30 // seconds // FIXME: 有効期限どうするかもう一回考える。

const prisma = new PrismaClient()
export default defineController((fastify) => ({
  post: async ({ body }) => {
    const idToken = body.accessToken
    const verifiedUser = await veriyfyUserViaFirebase(idToken)

    // unauthorized user
    if (!verifiedUser) {
      console.error('unauthorized')
      return {
        status: 401
      }
    }

    const user = await prisma.user.findUnique({
      where: { firebaseUid: verifiedUser.uid }
    })

    // user already exists
    if (user) {
      return {
        status: 201,
        body: { token: fastify.jwt.sign({ id: user.id }, { expiresIn }), user }
      }
    }

    // user does not exist -> create new user
    const newUser = await createUser(
      verifiedUser.displayName || '',
      verifiedUser.email || null,
      verifiedUser.photoURL || null,
      verifiedUser.uid
    )

    return {
      status: 201,
      body: {
        token: fastify.jwt.sign({ id: newUser.id }, { expiresIn }),
        user: newUser
      }
    }
  }
}))
