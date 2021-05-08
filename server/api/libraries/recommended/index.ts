import type { Library } from '$prisma/client'
import type { RecommendedLibraryInfo } from '$/types'

export type Methods = {
  /**
   * get recommended libraries
   * POST /libraries/recommended
   */
  post: {
    reqBody: [Library['id'], Library['id'], Library['id']]
    resBody: RecommendedLibraryInfo[]
  }
}
