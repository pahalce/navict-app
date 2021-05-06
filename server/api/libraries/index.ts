import type { Library } from '$prisma/client'

export type Methods = {
  /**
   * create a library
   * * POST /libraries
   */
  post: {
    reqBody: Pick<Library, 'title' | 'link'>
    resBody: Library
  }
}
