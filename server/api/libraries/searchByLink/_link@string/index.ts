import { LibraryInfo } from '$/types'

export type Methods = {
  /**
   * search libraries by link
   * GET /libraries/searchByLink/_link@string
   */
  get: {
    resBody: LibraryInfo[]
  }
}
