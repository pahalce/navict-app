import Image from 'next/image'

type TrashProp = {
  onClick?: () => void
}
const Trash = ({ onClick }: TrashProp) => {
  return (
    <Image
      src={`/trash.svg`}
      width={16}
      height={20}
      onClick={onClick}
      className={`cursor-pointer`}
    />
  )
}

export default Trash
