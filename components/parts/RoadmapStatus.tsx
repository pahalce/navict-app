import Image from 'next/image'

type RoadmapStatusProps = {
  forkedCount: number
  likedCount: number
}
const RoadmapStatus = ({ forkedCount, likedCount }: RoadmapStatusProps) => {
  return (
    <div className="flex items-center w-full">
      <Image src="/list/copy.svg" width={28} height={28} layout={'fixed'} />
      <div className="inline text-$accent4 font-josefin font-semibold text-2xl leading-tight ml-2 mr-4">
        {forkedCount}
      </div>
      <Image
        src="/list/heart-outline.svg"
        width={24}
        height={24}
        layout={'fixed'}
      />
      <div className="inline text-$accent2 font-josefin font-semibold text-2xl leading-tight ml-2">
        {likedCount}
      </div>
    </div>
  )
}

export default RoadmapStatus
