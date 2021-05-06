import { LibraryInfo } from '$/types'

export type Methods = {
  /**
   * search libraries by title
   * GET /libraries/searchByTitle/_title@string
   */
  get: {
    resBody: LibraryInfo[]
  }
}
