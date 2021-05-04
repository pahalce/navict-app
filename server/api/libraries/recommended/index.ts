import type { Library } from '$prisma/client'

type RecommendedLibrary = Library & { score: number }
export type Methods = {
  // get recommended libraries
  get: {
    reqBody: Library['id'][]
    resBody: RecommendedLibrary[]
  }
}
