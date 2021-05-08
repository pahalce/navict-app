import type { Like } from '$prisma/client'

export type Methods = {
  /**
   * toggle a like
   * ** POST /likes
   */
  post: {
    reqBody: Pick<Like, 'userId' | 'roadmapId'>
    status: 204
  }
}
