import React from 'react'
import { AuthProvider } from '~/contexts/AuthContext'
import Nav from './Nav'

interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <Nav />
      <div className="container">
        <main>{children}</main>
      </div>
    </AuthProvider>
  )
}

export default Layout
