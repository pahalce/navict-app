import type { Library } from '$prisma/client'

export type Methods = {
  // search libraries by link
  get: {
    resBody: Library[]
  }
}
