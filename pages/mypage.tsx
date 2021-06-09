import Layout from '~/components/Layout'
import UserPage from './users/[userId]'

const MypagePage = () => {
  return (
    <Layout>
      <UserPage isInMypage={true} />
    </Layout>
  )
}

export default MypagePage
