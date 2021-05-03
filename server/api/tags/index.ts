import type { Tag } from '$prisma/client'

export type Methods = {
  // create a tag
  post: {
    reqBody: Pick<Tag, 'name'>
    resBody: Tag
  }
}
