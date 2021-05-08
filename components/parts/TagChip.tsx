import Image from 'next/image'

type TagChipProps = {
  text: string
  onCrossClick: () => void
}
const TagChip = ({ text, onCrossClick }: TagChipProps) => {
  return (
    <div
      className={`flex items-center bg-$accent1 bg-opacity-10 rounded-full max-w-max px-4 py-2`}
    >
      <p className={`text-$t4 text-$indigo mr-2`}>{text}</p>
      <Image
        src={`/cross.svg`}
        width={9}
        height={9}
        layout="fixed"
        onClick={onCrossClick}
        className={`cursor-pointer`}
      />
    </div>
  )
}

export default TagChip
