import { LikeToggleBody } from '$/types'

export type Methods = {
  /**
   * toggle a like
   * [jn] POST /likes
   */
  post: {
    reqBody: LikeToggleBody
    status: 204
  }
}
