import { defineController } from './$relay'
import { getRecommendedSteps } from '$/service/steps'

export default defineController(() => ({
  get: async ({ body }) => ({
    status: 200,
    body: await getRecommendedSteps(body)
  })
}))
