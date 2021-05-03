import type { Library } from '$prisma/client'

export type Methods = {
  // create a library
  post: {
    reqBody: Pick<Library, 'title' | 'link'>
    resBody: Library
  }
}
