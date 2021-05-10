import Image from 'next/image'
import React from 'react'

type NavictChanProps = {
  text: string
}
const NavictChan = ({ text }: NavictChanProps) => {
  return (
    <div
      className={`flex justify-center items-center w-screen h-screen`}
      style={{ width: '100vw', height: '100vh' }}
    >
      <div className={`text-center`}>
        <Image
          src={`/navict_chan.gif`}
          width={323}
          height={215}
          className={`rounded-full`}
        />
        <p className={`text-$T2 text-$accent1 text-center mt-7`}>{text}</p>
      </div>
    </div>
  )
}

export default NavictChan
