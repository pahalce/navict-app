import { RoadmapInfo, RoadmapUpdateBody } from '$/types'
import type { Roadmap } from '$prisma/client'

export type Methods = {
  /**
   * get a roadmap
   * GET /roadmaps/_roadmapId@number
   */
  get: {
    resBody: RoadmapInfo
  }

  /**
   * update a roadmap
   * [jnz] PUT /roadmaps/_roadmapId@number
   */
  put: {
    reqBody: RoadmapUpdateBody
    resBody: Roadmap
  }

  /**
   * delete a roadmap
   * [jz] DELETE /roadmaps/_roadmapId@number
   */
  delete: {
    status: 204
  }
}
