import Image from 'next/image'

type TagChipProps = {
  text: string
  onClick: () => void
}
const TagChip = ({ text, onClick }: TagChipProps) => {
  return (
    <div
      className={`flex bg-$accent1 bg-opacity-10 rounded-full max-w-max px-4 py-2`}
    >
      <p className={`text-$t4 text-$indigo mr-2`}>{text}</p>
      <Image
        src={`/close.svg`}
        width={7.29}
        height={7.29}
        onClick={onClick}
        className={`cursor-pointer`}
      />
    </div>
  )
}

export default TagChip
