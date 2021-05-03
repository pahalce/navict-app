import type { Roadmap } from '$prisma/client'

export type Methods = {
  // search roadmaps by keyword
  get: {
    resBody: Roadmap[]
  }
}
