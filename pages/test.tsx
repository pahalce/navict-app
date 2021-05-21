import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'
import { useAuth } from '~/contexts/AuthContext'

const TestPage = () => {
  const auth = useAuth()
  if (!auth || !auth.user) return <div>failed to load</div>
  const { data: user, error: userError } = useAspidaSWR(
    apiClient.users._userId(auth.user.id)
  )
  if (userError || !user) return <div>failed to load</div>

  return <div></div>