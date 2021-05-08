import { defineController } from './$relay'
import { getRecommendedLibraryInfos } from '$/service/libraries'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 200,
    body: await getRecommendedLibraryInfos(body)
  })
}))
