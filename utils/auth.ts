import type { NextRouter } from 'next/router'

export const pushSigninWithPrevUrl = (router: NextRouter) => {
  router.push(`/signin?prevUrl=${router.route}`)
}
