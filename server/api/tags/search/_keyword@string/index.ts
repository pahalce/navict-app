import type { Tag } from '$prisma/client'

export type Methods = {
  // search tags
  get: {
    resBody: Tag[]
  }
}
