import Image from 'next/image'
type Props = {
  src: string
  size?: number
  className?: string
}

const UserIcon = ({ src, size = 500, className }: Props) => {
  return (
    <div className={'rounded-full overflow-hidden w-12 h-12 ' + className}>
      <Image src={src} alt="user icon" width={size} height={size} />
    </div>
  )
}

export default UserIcon
