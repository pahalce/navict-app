import React from 'react'
import Footer from './Footer'
import Header, { HEADER_BTN_TYPES } from './header/Header'

type Props = {
  children: React.ReactNode
  headerType?: HEADER_BTN_TYPES
  onHeaderSaveBtnClick?: () => void
}

const Layout = ({ children, headerType, onHeaderSaveBtnClick }: Props) => {
  return (
    <>
      <Header type={headerType} onSave={onHeaderSaveBtnClick} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
