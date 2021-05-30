import aspida from '@aspida/axios'
import api from '~/server/api/$api'

export const apiClient = api(aspida())

export const headersAuthz = (token: string | undefined) => {
  if (typeof token === 'undefined') {
    return {}
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
}
