import type { User } from '$prisma/client'

type reqBody = {
  accessToken: string
}

type resBody = {
  token: string
  user: User
}

export type Methods = {
  /**
   * singin
   * POST /signin
   */
  post: {
    reqBody: reqBody
    resBody: resBody
  }
}
