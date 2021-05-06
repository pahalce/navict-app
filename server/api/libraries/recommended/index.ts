import { LibraryInfo } from '$/types'
import type { Library } from '$prisma/client'

type LibraryId = Library['id']
type RecommendedLibraryInfo = LibraryInfo & { score: number }
export type Methods = {
  /**
   * get recommended libraries
   * POST /libraries/recommended
   */
  post: {
    reqBody: LibraryId[]
    resBody: RecommendedLibraryInfo[]
  }
}
