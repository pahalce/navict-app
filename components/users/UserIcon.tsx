import Link from 'next/link'

const navictIcon =
  'https://pbs.twimg.com/profile_images/1388752520659435522/ayy03jFq_400x400.jpg'

type Props = {
  src: string
  userId?: number
  sizeClasses?: string
  className?: string
}

const UserIcon = ({
  userId,
  src,
  sizeClasses = 'w-12 h-12',
  className
}: Props) => {
  let href
  let img
  if (userId) {
    href = userId ? `/users/${userId}` : '/mypage'
    img = (
      <Link href={href}>
        <img
          src={src || navictIcon}
          alt=""
          className="flex justify-center items-center w-full h-full"
        />
      </Link>
    )
  } else {
    img = (
      <img
        src={src || navictIcon}
        alt=""
        className="flex justify-center items-center w-full h-full"
      />
    )
  }
  return (
    <div className={`rounded-full overflow-hidden ${sizeClasses} ${className}`}>
      {img}
    </div>
  )
}

export default UserIcon
