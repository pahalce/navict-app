import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  className?: string
  disabled?: boolean
}

const ButtonSmall: React.FC<Props> = ({
  text,
  className,
  disabled = false,
  ...props
}: Props) => {
  return (
    <button
      className={
        (disabled ? 'bg-$primary2 text-$white' : 'bg-$accent1 text-$white') +
        ` text-$t3 rounded-md py-2 px-8 ${className}`
      }
      {...props}
    >
      {text}
    </button>
  )
}

export default ButtonSmall
