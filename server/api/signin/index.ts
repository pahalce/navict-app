import type { User } from '$prisma/client'

type SigninBody = {
  firebaseUid: User['firebaseUid']
  accessToken: string
}

type Token = string

export type Methods = {
  // signin
  post: {
    reqBody: SigninBody
    resBody: Token
  }
}
