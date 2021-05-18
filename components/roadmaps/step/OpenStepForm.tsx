import Image from 'next/image'
import React from 'react'

type Props = {
  onClick: () => void
  isOpen: boolean
  text: string
  children: React.ReactNode
}

const OpenStepForm = ({ onClick, isOpen, text, children }: Props) => {
  return (
    <div className="bg-$white text-$t2 text-center rounded-3xl text-$primary shadow-$rich w-full max-w-3xl py-14 px-10 select-none">
      <div onClick={onClick} className="cursor-pointer">
        {text}{' '}
        <Image
          src={isOpen ? '/minus.svg' : '/plus.svg'}
          width="20"
          height="20"
          layout="fixed"
        />
      </div>
      {isOpen && children}
    </div>
  )
}

export default OpenStepForm
