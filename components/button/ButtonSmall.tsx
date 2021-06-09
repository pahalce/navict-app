import React, { RefObject } from 'react'
import Image from 'next/image'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  textColor?: string
  bgColor?: string
  className?: string
  disabled?: boolean
  iconImg?: string
  buttonRef?: RefObject<HTMLButtonElement>
}

const ButtonSmall: React.FC<Props> = ({
  text,
  textColor = 'text-$white',
  bgColor = 'bg-$accent1',
  className,
  disabled = false,
  iconImg,
  buttonRef,
  ...props
}: Props) => {
  return (
    <button
      className={
        (disabled
          ? 'bg-$primary2 text-$white cursor-default'
          : `${bgColor} ${textColor}`) +
        ` text-$t3 rounded-md py-2 px-8 ${className}`
      }
      ref={buttonRef}
      {...props}
    >
      {iconImg && (
        <div className="mr-2 inline-block">
          <Image src={iconImg} alt="pencil icon" width="20" height="20" />
        </div>
      )}
      {text}
    </button>
  )
}

export default ButtonSmall
