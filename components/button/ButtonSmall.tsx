import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  className?: string
}

const ButtonSmall: React.FC<Props> = ({ text, className, ...props }: Props) => {
  return (
    <button
      className={`bg-$accent1 text-$white text-$t3 rounded-md py-2 px-8 ${className}`}
      {...props}
    >
      {text}
    </button>
  )
}

export default ButtonSmall
