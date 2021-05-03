import React, { useContext, useState, useEffect } from 'react'
import { apiClient } from '~/utils/apiClient'
import firebase from 'firebase/app'
import { auth } from '$firebase/firebase'

// TODO:Loginなどのメッセージをログじゃなくてちゃんと作る
// TODO:loginを必要になったとき実装する
// TODO: console.log全部消す

interface AuthContextInterface {
  signup: () => void
  logout: () => void
  isLoggedIn: boolean
}

const AuthContext = React.createContext<AuthContextInterface | null>(null)
export const useAuth = () => {
  return useContext(AuthContext)
}

interface Props {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  const signup = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider()
      await firebase.auth().signInWithRedirect(provider)
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
        console.log(document.cookie)
        console.log('no user')
        setLoading(false)
        return
      }

      try {
        // user signed-in
        const idToken = await user.getIdToken(/* forceRefresh */ true)

        // Send token to your backend via HTTPS
        await apiClient.signin.post({
          body: { accessToken: idToken }
        })
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

  const value: AuthContextInterface = {
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
