import type { Roadmap } from '$prisma/client'
import type { RoadmapCreateReqBody } from '$/types/index'

type reqBody = RoadmapCreateReqBody
export type Methods = {
  /**
   * create a roadmap
   * ** POST /roadmaps
   */
  post: {
    reqBody: reqBody
    resBody: Roadmap
  }
}
