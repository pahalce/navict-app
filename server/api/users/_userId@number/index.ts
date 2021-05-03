import type { User } from '$prisma/client'

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
  // get a user
  get: {
    resBody: User
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
