import { Step } from '$prisma/client'

type LibraryId = Step['libraryId']
export type Methods = {
  // get all roadmaps' libraryIds
  get: {
    resBody: [LibraryId, LibraryId, LibraryId, LibraryId][]
  }
}
