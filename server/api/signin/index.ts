import type { User } from '$prisma/client'

type SigninReqBody = {
  accessToken: string
}
type SigninResBody = {
  token: string
  user: User
}

export type Methods = {
  /**
   * singin
   * POST /signin
   */
  post: {
    reqBody: SigninReqBody
    resBody: SigninResBody
  }
}
