import Image from 'next/image'

type TagChipProps = {
  text: string
  onCrossClick: () => void
}
const TagChip = ({ text, onCrossClick }: TagChipProps) => {
  return (
    <div
      className={`flex bg-$accent1 bg-opacity-10 rounded-full max-w-max px-4 py-2`}
    >
      <p className={`text-$t4 text-$indigo mr-2`}>{text}</p>
      <Image
        src={`/cross.svg`}
        width={7.29}
        height={7.29}
        onClick={onCrossClick}
        className={`cursor-pointer`}
      />
    </div>
  )
}

export default TagChip
