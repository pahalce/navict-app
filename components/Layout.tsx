import React from 'react'
import { AuthProvider } from '~/contexts/AuthContext'
import Nav from './header/Nav'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <Nav />
      <main>{children}</main>
    </AuthProvider>
  )
}

export default Layout
