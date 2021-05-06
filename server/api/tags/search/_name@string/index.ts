import type { Tag } from '$prisma/client'

export type Methods = {
  /**
   * search tags by name
   * GET /tags/search/_name@string
   */
  get: {
    resBody: Tag[]
  }
}
