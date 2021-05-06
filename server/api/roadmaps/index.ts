import type { Roadmap, Step, Tag } from '$prisma/client'

type reqBody = Pick<
  Roadmap,
  'title' | 'description' | 'forkedRoadmapId' | 'firstStepId' | 'userId'
> & {
  tags: Pick<Tag, 'name'>[]
  steps: Pick<Step, 'memo' | 'nextStepId' | 'isDone' | 'libraryId'>[]
}
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
