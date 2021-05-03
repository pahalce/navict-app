import type { Step } from '$prisma/client'

type LibraryId = Step['libraryId']
type RecommendedStep = Step & { score: number }
export type Methods = {
  // get recommend steps
  get: {
    reqBody: LibraryId[]
    resBody: RecommendedStep[]
  }
}
