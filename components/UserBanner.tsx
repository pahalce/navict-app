import styles from '~/styles/UserBanner.module.css'
import { useAuth } from '~/contexts/AuthContext'

const UserBanner = () => {
  const auth = useAuth()

  const login = async () => {
    await auth?.signup()
  }

  const logout = async () => {
    await auth?.logout()
  }

  return (
    <div className={styles.userBanner}>
      {auth?.isLoggedIn ? (
        <button onClick={logout}>LOGOUT</button>
      ) : (
        <button onClick={login}>LOGIN</button>
      )}
    </div>
  )
}

export default UserBanner
