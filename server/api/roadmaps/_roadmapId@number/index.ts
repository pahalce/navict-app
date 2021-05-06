import { RoadmapInfo } from '$/types'
import type { Roadmap, Step, Tag } from '$prisma/client'

export type UpdateRoadmapReqBody = Partial<
  Pick<
    Roadmap,
    'title' | 'description' | 'forkedRoadmapId' | 'firstStepId' | 'userId'
  > & {
    tags: Pick<Tag, 'name'>[]
    steps: Pick<Step, 'memo' | 'nextStepId' | 'isDone' | 'libraryId'>[]
  }
>
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
   * PUT /roadmaps/_roadmapId@number
   */
  put: {
    reqBody: UpdateRoadmapReqBody
    resBody: Roadmap
  }

  /**
   * delete a roadmap
   * ** DELETE /roadmaps/_roadmapId@number
   */
  delete: {
    status: 204
  }
}
