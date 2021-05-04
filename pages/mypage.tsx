import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '~/contexts/AuthContext'

const myPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const logout = async () => {
    try {
      auth?.logout()
      router.push('/')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => logout()}
        className="bg-$accent2 rounded-full text-$t2 text-$tint py-2 px-10"
      >
        ログアウト
      </button>
    </div>
  )
}

export default myPage
