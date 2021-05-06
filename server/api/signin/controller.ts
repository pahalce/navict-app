import { defineController } from './$relay'
import { PrismaClient } from '@prisma/client'
import { veriyfyUserViaFirebase, createUser } from '$/service/users'

const prisma = new PrismaClient()
export default defineController((fastify) => ({
  post: async ({ body }) => {
    const idToken = body.accessToken
    const verifiedUser = await veriyfyUserViaFirebase(idToken)

    // unauthorized user
    if (!verifiedUser) {
      console.log('unauthorized')
      return {
        status: 401
      }
    }

    const user = await prisma.user.findUnique({
      where: { firebaseUid: verifiedUser.uid }
    })

    // user already exists
    if (user) {
      console.log('user exists')
      return {
        status: 201,
        body: { token: fastify.jwt.sign({ id: user.id }), user }
      }
    }

    // user does not exist -> create new user
    const newUser = await createUser(
      verifiedUser.displayName || '',
      verifiedUser.email || null,
      verifiedUser.photoURL || null,
      verifiedUser.uid
    )

    console.log('created new user')
    return {
      status: 201,
      body: { token: fastify.jwt.sign({ id: newUser.id }), user: newUser }
    }
  }
}))
