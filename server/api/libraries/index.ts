import { LibraryCreateBody } from '$/types'
import type { Library } from '$prisma/client'

export type Methods = {
  /**
   * create a library
   * * POST /libraries
   */
  post: {
    reqBody: LibraryCreateBody
    resBody: Library
  }
}
