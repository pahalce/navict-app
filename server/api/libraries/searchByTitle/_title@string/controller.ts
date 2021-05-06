import { defineController } from './$relay'
import { searchLibrariesByTitle } from '$/service/libraries'

export default defineController(() => ({
  get: async ({ params }) => ({
    status: 200,
    body: await searchLibrariesByTitle(params.title)
  })
}))
