import type { Like } from '$prisma/client'

export type Methods = {
  // create a like
  post: {
    reqBody: Pick<Like, 'userId' | 'roadmapId'>
    resBody: Like
  }
}
