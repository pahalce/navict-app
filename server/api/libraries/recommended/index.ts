import type { Library } from '$prisma/client'

type LibraryId = Library['id']
type RecommendedLibrary = Library & { score: number }
export type Methods = {
  /**
   * get recommended libraries
   * POST /libraries/recommended
   */
  post: {
    reqBody: LibraryId[]
    resBody: RecommendedLibrary[]
  }
}
