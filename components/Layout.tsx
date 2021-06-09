import React from 'react'
import { SubmitHandler } from 'react-hook-form'
import Footer from './Footer'
import Header, { HEADER_BTN_TYPES } from './Header'
import { RoadmapFormSchema } from './roadmaps/RoadmapForm'

type Props = {
  children: React.ReactNode
  headerType?: HEADER_BTN_TYPES
  onHeaderSaveBtnClick?: SubmitHandler<RoadmapFormSchema>
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
