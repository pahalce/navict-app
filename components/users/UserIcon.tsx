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
  let sizeStyle
  if (size == 12) {
    sizeStyle = { width: '3rem', height: '3rem' }
  } else if (size == 14) {
    sizeStyle = { width: '3.5rem', height: '3.5rem' }
  } else if (size == 20) {
    sizeStyle = { width: '5rem', height: '5rem' }
  } else if (size == 24) {
    sizeStyle = { width: '6rem', height: '6rem' }
  } else {
    sizeStyle = { width: '3rem', height: '3rem' }
  }
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
      style={sizeStyle}
      className={`rounded-full overflow-hidden ${className}`}
    >
      {img}
    </div>
  )
}

export default UserIcon
