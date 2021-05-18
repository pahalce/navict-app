import { TagCreateBody } from '$/types'
import type { Tag } from '$prisma/client'

export type Methods = {
  /**
   * create a tag
   * * POST /tags
   */
  post: {
    reqBody: TagCreateBody
    resBody: Tag
  }
}
