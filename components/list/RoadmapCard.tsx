import type { RoadmapInfo, TagInfo } from '$/types'
import Link from 'next/link'
import Image from 'next/image'
import UserIcon from '../UserIcon'
import Tag from '../parts/Tag'
import React, { useState } from 'react'
import { formatDate } from 'utils/utility'
import AnimatedCircularProgressBar from '../parts/AnimatedCircularProgressBar'
import { Roadmap } from '$prisma/client'

export enum RoadmapCardType {
  DOING,
  DONE,
  LIKE
}

type TagsProps = {
  tags: TagInfo[]
}
const Tags = ({ tags }: TagsProps) => {
  return (
    <div className="flex text-$indigo my-4">
      {tags.map((tag, i) => (
        <Tag key={i} name={tag.name} className="mr-6" />
      ))}
    </div>
  )
}

type RightBottomProps = {
  type: RoadmapCardType
  roadmap: RoadmapInfo
  isLiked: boolean
  onToggleLike: () => void
}
const RightBottom = ({
  type,
  roadmap,
  isLiked,
  onToggleLike
}: RightBottomProps) => {
  let rightBottom
  if (type === RoadmapCardType.DOING) {
    rightBottom = (
      <AnimatedCircularProgressBar
        finalValue={roadmap.donePercent}
        text={`${roadmap.donePercent}%`}
        className={`w-16 h-16`}
      />
    )
  } else if (type === RoadmapCardType.DONE) {
    rightBottom = <Image src={`/crown.svg`} width={47} height={36.35} />
  } else {
    rightBottom = (
      <Image
        onClick={onToggleLike}
        src={isLiked ? '/list/heart-fill.svg' : '/list/heart-outline-gray.svg'}
        className="cursor-pointer"
        width={32}
        height={32}
        layout={'fixed'}
      />
    )
  }

  return (
    <div>
      <div className="absolute bottom-0 right-0">{rightBottom}</div>
    </div>
  )
}

type RoadmapCardProps = {
  type: RoadmapCardType
  roadmap: RoadmapInfo
  isLiked: boolean
  onToggleLike: (roadmapId: Roadmap['id']) => void
}
const RoadmapCard = ({
  type,
  roadmap,
  isLiked: initialIsLiked,
  onToggleLike
}: RoadmapCardProps) => {
  const [isLiked, setIsliked] = useState<boolean>(initialIsLiked)

  const handleToggleLike = () => {
    setIsliked(!isLiked)
    onToggleLike(roadmap.id)
  }

  return (
    <div className="flex justify-between bg-$white rounded-3xl shadow-$rich px-12 py-8">
      <div className="flex">
        <div className={`mr-10`} style={{ minWidth: '48px' }}>
          <UserIcon
            userId={roadmap.user.id}
            src={roadmap.user.img || ''}
            size={12}
            className={`cursor-pointer`}
          />
        </div>

        <div>
          <p className="text-$T6 text-$shade1">
            {formatDate(roadmap.updatedAt)} 更新
          </p>
          <p className="text-$t2 text-$primary cursor-pointer inline">
            {/* FIXME: RoadmapPageに飛ばす。*/}
            <Link href={`/`}>{roadmap.title}</Link>
          </p>
          <p className="text-$indigo">{roadmap.user.name}</p>
          <Tags tags={roadmap.tags} />
          <div className="text-$t5 text-$primary2">{roadmap.description}</div>
        </div>
      </div>

      {/* right part icons and likes */}
      <div className="relative pl-5">
        {/* upper-right */}
        <div className="flex items-center w-full">
          <Image src="/list/copy.svg" width={28} height={28} layout={'fixed'} />
          <div className="inline text-$accent4 font-josefin font-semibold text-2xl leading-tight ml-2 mr-4">
            {roadmap.forkedCount}
          </div>
          <Image
            src="/list/heart-outline.svg"
            width={24}
            height={24}
            layout={'fixed'}
          />
          <div className="inline text-$accent2 font-josefin font-semibold text-2xl leading-tight ml-2">
            {roadmap.likedCount}
          </div>
        </div>
        {/* bottom-left */}
        <RightBottom
          type={type}
          roadmap={roadmap}
          isLiked={isLiked}
          onToggleLike={handleToggleLike}
        />
      </div>
    </div>
  )
}

export default RoadmapCard
