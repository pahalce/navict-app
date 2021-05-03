import type { Tag } from '$prisma/client'

export type Methods = {
  // search tags by name
  get: {
    resBody: Tag[]
  }
}
