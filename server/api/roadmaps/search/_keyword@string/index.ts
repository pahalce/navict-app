import { RoadmapInfo } from '$/types'

export type Methods = {
  /**
   * search roadmaps by keyword
   * GET /roadmaps/search/_keyword@string
   */
  get: {
    resBody: RoadmapInfo[]
  }
}
