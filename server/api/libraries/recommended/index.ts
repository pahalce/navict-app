import type { RecommendedLibraryInfo, RecommendedLibraryGetBody } from '$/types'

export type Methods = {
  /**
   * get recommended libraries
   * POST /libraries/recommended
   */
  post: {
    reqBody: RecommendedLibraryGetBody
    resBody: RecommendedLibraryInfo[]
  }
}
