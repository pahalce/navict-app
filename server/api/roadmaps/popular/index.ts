import { RoadmapInfo } from '$/types'

export type Methods = {
  /**
   * get popular roadmaps
   * GET /roadmaps/popular
   */
  get: {
    resBody: RoadmapInfo[]
  }
}
