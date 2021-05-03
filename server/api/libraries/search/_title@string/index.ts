import type { Library } from '$prisma/client'

export type Methods = {
  // search libraries by title
  get: {
    resBody: Library[]
  }
}
