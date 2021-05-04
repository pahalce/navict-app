import type { User } from '$prisma/client'
// type Token = { token: string }
type SigninReqBody = {
  accessToken: string
}
type SigninResBody = {
  token: string
  user: User
}

export type Methods = {
  // signin
  post: {
    reqBody: SigninReqBody
    resBody: SigninResBody
  }
}
