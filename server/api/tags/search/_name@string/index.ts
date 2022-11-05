import { TagInfo } from '$/types'

export type Methods = {
  /**
   * search tags by name
   * GET /tags/search/_name@string
   */
  get: {
    resBody: TagInfo[]
  }
}
