import type { User } from '$prisma/client'

export type Methods = {
  // get a user
  get: {
    resBody: string
  }

  // update a user
  put: {
    reqBody: Partial<
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
    status: 204
  }

  // delete a user
  delete: {
    status: 204
  }
}
