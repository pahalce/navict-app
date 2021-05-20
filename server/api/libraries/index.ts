import { LibraryCreateBody } from '$/types'
import type { Library } from '$prisma/client'

export type Methods = {
  /**
   * create a library
   * [j] POST /libraries
   */
  post: {
    reqBody: LibraryCreateBody
    resBody: Library
  }
}
