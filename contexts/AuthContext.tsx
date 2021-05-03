import React, { useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { auth } from '$firebase/firebase'

// TODO:Loginなどのメッセージをログじゃなくてちゃんと作る
// TODO:loginを必要になったとき実装する
type Username = string | null

interface AuthContextInterface {
  username: string | null
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
  const [username, setUsername] = useState<Username>(null)
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
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setLoading(false)
        return
      }
      const username: Username = user.displayName
      console.log(`hello ${username}`)
      // The signed-in user info.
      setUsername(username)
      setIsLoggedIn(true)
      setLoading(false)
      console.log(user?.email, user?.displayName, user?.photoURL, user?.uid)
    })
    return unsubscribe
  }, [])

  const value: AuthContextInterface = {
    username,
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
