import React from 'react'
import Image from 'next/image'
import { useAuth } from '~/contexts/AuthContext'
import { useRouter } from 'next/router'
import Layout from '~/components/Layout'
const SigninPage = () => {
  const router = useRouter()
  const { prevUrl } = router.query
  const auth = useAuth()
  if (auth?.isLoggedIn) {
    if (typeof prevUrl === 'string') {
      router.push(prevUrl)
    } else {
      router.push('/')
    }
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center pt-16 pb-28">
        <div>
          <img src="/signin-mv.jpg" className={`mb-28`} />
        </div>
        <button
          onClick={() => {
            auth?.signup('twitter')
          }}
          className="flex items-center justify-center bg-$twitterBlue rounded-full text-$white w-96 h-20 mb-7"
        >
          <Image
            src="/brandIcon/twitterIcon.svg"
            alt="twitter icon"
            width="24"
            height="24"
          />
          <div className="text-$t3 ml-4">Twitterではじめる</div>
        </button>
        <button
          onClick={() => {
            auth?.signup('google')
          }}
          className="flex items-center justify-center border-2 border-$shade1 rounded-full text-$primary w-96 h-20"
        >
          <Image
            src="/brandIcon/googleIcon.svg"
            alt="google icon"
            width="36"
            height="36"
          />
          <div className="text-$t3 ml-4">Googleではじめる</div>
        </button>
      </div>
    </Layout>
  )
}

export default SigninPage
