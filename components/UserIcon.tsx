import Image from 'next/image'
type Props = {
  src: string
  size?: number
  className?: string
}

const UserIcon = ({ src, size = 12, className }: Props) => {
  return (
    <div
      className={`rounded-full overflow-hidden w-${size} h-${size} ${className}`}
    >
      <Image src={src} alt="user icon" width="5000" height="5000" />
    </div>
  )
}

export default UserIcon
