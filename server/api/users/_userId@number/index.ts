import type { User } from '$prisma/client'
import type { UserInfo } from '$/types'

type UpdateUserBody = Partial<
  Pick<
    User,
    | 'name'
    | 'email'
    | 'bio'
    | 'img'
    | 'twitterLink'
    | 'githubLink'
    | 'websiteLink'
  >
>

export type Methods = {
  /**
   * get a user
   * GET /users/_userId@number
   */
  get: {
    resBody: UserInfo
  }

  // update a user
  put: {
    reqBody: UpdateUserBody
    resBody: User
  }

  // delete a user
  delete: {
    status: 204
  }
}
