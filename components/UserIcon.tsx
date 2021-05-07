import Link from 'next/link'

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
      className={`rounded-full overflow-hidden w-${size} h-${size} min-h-${size} ${className}`}
    >
      {/* FIXME: UserPageに飛ばす */}
      <Link href={`/mypage`}>
        <img src={src || navictIcon} alt="" className="object-cover" />
      </Link>
    </div>
  )
}

export default UserIcon
