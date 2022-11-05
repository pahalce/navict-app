import Link from 'next/link'

const navictIcon =
  'https://pbs.twimg.com/profile_images/1388752520659435522/ayy03jFq_400x400.jpg'

type Props = {
  src: string
  userId?: number
  size?: number
  className?: string
}

const UserIcon = ({ userId, src, size = 12, className }: Props) => {
  let href
  let img
  if (userId) {
    href = userId ? `/users/${userId}` : '/mypage'
    img = (
      <Link href={href}>
        <img
          src={src || navictIcon}
          alt=""
          className="flex justify-center items-center object-cover"
        />
      </Link>
    )
  } else {
    img = (
      <img
        src={src || navictIcon}
        alt=""
        className="flex justify-center items-center object-cover"
      />
    )
  }
  return (
    <div
      className={`rounded-full overflow-hidden w-${size} h-${size} ${className}`}
    >
      {img}
    </div>
  )
}

export default UserIcon
