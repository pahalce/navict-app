import type { Roadmap } from '$prisma/client'

export type Methods = {
  // create a roadmap
  post: {
    reqBody: Pick<
      Roadmap,
      'title' | 'description' | 'forkedRoadmapId' | 'firstStepId' | 'userId'
    >
    resBody: Roadmap
  }
}
