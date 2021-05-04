import { defineController } from './$relay'
import { getRecommendedLibraries } from '$/service/libraries'

export default defineController(() => ({
  get: async ({ body }) => ({
    status: 200,
    body: await getRecommendedLibraries(body)
  })
}))
