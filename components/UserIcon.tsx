const navictIcon =
  'https://pbs.twimg.com/profile_images/1388752520659435522/ayy03jFq_400x400.jpg'

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
      <img src={src || navictIcon} alt="" className="object-cover" />
    </div>
  )
}

export default UserIcon
