import React from 'react'
import Image from 'next/image'
import { useAuth } from '~/contexts/AuthContext'
import { useRouter } from 'next/router'
const signin = () => {
  const router = useRouter()
  const auth = useAuth()
  if (auth?.isLoggedIn) router.push('/')

  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <h1 className="my-20 text-$t2">
        <span className="font-josefin">navict</span>
        のロードマップでなんちゃららしよう。
      </h1>
      <button
        onClick={() => {
          auth?.signup('twitter')
        }}
        className="flex items-center bg-$twitterBlue rounded-full text-$white py-5 px-20"
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
        className="flex items-center border-2 border-$shade1 rounded-full text-$primary py-5 px-20 mt-8"
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
  )
}

export default signin
