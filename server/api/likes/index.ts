import type { Like } from '$prisma/client'

export type Methods = {
  /**
   * create a like
   * ** POST /likes
   */
  post: {
    reqBody: Pick<Like, 'userId' | 'roadmapId'>
    resBody: Like
  }
}
