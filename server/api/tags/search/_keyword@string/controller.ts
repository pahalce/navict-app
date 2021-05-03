import { defineController } from './$relay'
import { searchTags } from '$/service/tags'

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await searchTags(params.keyword)
  })
}))
