import React, { useContext, useState, useEffect } from 'react'
import { apiClient } from '~/utils/apiClient'
import firebase from 'firebase/app'
import { auth } from '$firebase/firebase'

// TODO:Loginなどのメッセージをログじゃなくてちゃんと作る
// TODO:loginを必要になったとき実装する
// TODO: console.log全部消す

export type SigninMethod = 'google' | 'twitter'
type AuthContext = {
  signup: (method: Partial<SigninMethod>) => void
  logout: () => void
  isLoggedIn: boolean
}

type Props = {
  children: React.ReactNode
}

const AuthContext = React.createContext<AuthContext | null>(null)
export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const signup = async (method: SigninMethod) => {
    try {
      if (method === 'google') {
        const provider = new firebase.auth.GoogleAuthProvider()
        await firebase.auth().signInWithRedirect(provider)
      } else if (method === 'twitter') {
        const provider = new firebase.auth.TwitterAuthProvider()
        await firebase.auth().signInWithRedirect(provider)
      } else {
        throw Error('signin method not specified.')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    try {
      await auth.signOut()
      setIsLoggedIn(false)
      console.log('logged out')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        console.log('no user')
        setLoading(false)
        return
      }

      try {
        // user signed-in
        const idToken = await user.getIdToken(/* forceRefresh */ true)
        console.log('idToken', idToken)
        // Send token to your backend via HTTPS
        const res = await apiClient.signin.post({
          body: { accessToken: idToken }
        })
        console.log('user:', user)
        console.log('token:', res.body.token)
        const username = user.displayName
        console.log(`hello ${username}`)
        setIsLoggedIn(true)
        setLoading(false)
      } catch (error) {
        console.log('error:useEffect:', error)
      }
    })
    return unsubscribe
  }, [])

  const value: AuthContext = {
    signup,
    logout,
    isLoggedIn
  }
  return (
    <AuthContext.Provider value={value}>
      {loading && 'loading...'}
      {!loading && children}
    </AuthContext.Provider>
  )
}
