import Image from 'next/image'

type ThreeDotsProp = {
  onClick?: () => void
}
const ThreeDots = ({ onClick }: ThreeDotsProp) => {
  return (
    <Image
      src={`/three-dots.svg`}
      width={16}
      height={20}
      onClick={onClick}
      className={`cursor-pointer`}
    />
  )
}

export default ThreeDots
