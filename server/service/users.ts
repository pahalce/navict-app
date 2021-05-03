import { PrismaClient } from '@prisma/client'
import type { Prisma, User } from '$prisma/client'
import * as admin from 'firebase-admin'

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  })
})

const prisma = new PrismaClient()

export const veriyfyUserViaFirebase = async (idToken: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    const user = await await admin.auth().getUser(decodedToken.uid)
    return user
  } catch (error) {
    // no verified user
    console.log('verify-error', error)
    return null
  }
}

export const getUser = (id: User['id']) => {
  return prisma.user.findUnique({
    where: {
      id: id
    }
  })
}
export const updateUser = (
  userId: User['id'],
  partialUser: Prisma.UserUpdateInput
) => {
  return prisma.user.update({
    where: {
      id: userId
    },
    data: partialUser
  })
}

// TODO: firebaseのアカウントも削除する
export const deleteUser = (id: User['id']) => {
  prisma.user.delete({ where: { id } })
}
