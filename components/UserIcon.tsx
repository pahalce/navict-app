import Image from 'next/image'
type Props = {
  src: string
  size?: number
  className?: string
}

const UserIcon = ({ src, size = 12, className }: Props) => {
  return (
    <div
      className={`flex justify-center items-center rounded-full overflow-hidden w-${size} h-${size} ${className}`}
    >
      <img src={src} alt="" className="object-cover" />
    </div>
  )
}

export default UserIcon
