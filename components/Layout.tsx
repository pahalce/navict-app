import React from 'react'
import { AuthProvider } from '~/contexts/AuthContext'
import Nav from './Nav'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <div className="container px-10 mx-auto pt-4">
        <Nav />
        <main>{children}</main>
      </div>
    </AuthProvider>
  )
}

export default Layout
