import { SigninMethod, useAuth } from '~/contexts/AuthContext'

const UserBanner = () => {
  const auth = useAuth()
  const login = async (method: SigninMethod) => {
    await auth?.signup(method)
  }

  const logout = async () => {
    await auth?.logout()
  }

  return (
    <div>
      {auth?.isLoggedIn ? (
        <button onClick={logout}>LOGOUT</button>
      ) : (
        <>
          <button onClick={() => login('twitter')}>Twitter Login</button>
          <button onClick={() => login('google')}>Google Login</button>
        </>
      )}
    </div>
  )
}

export default UserBanner
