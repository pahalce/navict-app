import { RoadmapInfo } from '$/types'
import type { Roadmap } from '$prisma/client'

type UpdateRoadmapBody = Partial<
  Pick<Roadmap, 'title' | 'description' | 'forkedRoadmapId' | 'userId'>
>
export type Methods = {
  /**
   * get a roadmap
   * GET /roadmaps/_roadmapId@number
   */
  get: {
    resBody: RoadmapInfo
  }

  // update a roadmap
  put: {
    reqBody: UpdateRoadmapBody
    resBody: Roadmap
  }

  // delete a roadmap
  delete: {
    status: 204
  }
}
