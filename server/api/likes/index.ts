import { LikeToggleBody } from '$/types'

export type Methods = {
  /**
   * toggle a like
   * ** POST /likes
   */
  post: {
    reqBody: LikeToggleBody
    status: 204
  }
}
