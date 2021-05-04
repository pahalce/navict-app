import { SigninMethod, useAuth } from '~/contexts/AuthContext'

const Nav = () => {
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
        <button onClick={logout}>新規作成</button>
      ) : (
        <>
          <button onClick={() => login('twitter')}>Twitter Login</button>
          <button onClick={() => login('google')}>Google Login</button>
        </>
      )}
    </div>
  )
}

export default Nav
