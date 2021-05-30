import type { Roadmap } from '$prisma/client'
import type { RoadmapCreateBody } from '$/types/index'

export type Methods = {
  /**
   * create a roadmap
   * [jn] POST /roadmaps
   */
  post: {
    reqBody: RoadmapCreateBody
    resBody: Roadmap
  }
}
