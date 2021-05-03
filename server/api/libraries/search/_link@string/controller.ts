import { defineController } from './$relay'
import { searchLibrariesByLink } from '$/service/libraries'

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await searchLibrariesByLink(params.link)
  })
}))
