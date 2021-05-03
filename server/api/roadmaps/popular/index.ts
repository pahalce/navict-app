import type { Roadmap } from '$prisma/client'

export type Methods = {
  // get popular roadmaps
  get: {
    resBody: Roadmap[]
  }
}
