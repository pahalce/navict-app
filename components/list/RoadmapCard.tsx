import type { RoadmapInfo } from '$/types'
import { useAuth } from '~/contexts/AuthContext'
import Link from 'next/link'
import Image from 'next/image'
import UserIcon from '../UserIcon'
import Tag from '../parts/Tag'
import { useState } from 'react'
import { formatDate } from 'utils/utility'

type Props = {
  roadmap: RoadmapInfo
}

const RoadmapCard = ({ roadmap }: Props) => {
  const auth = useAuth()
  const [isliked, setIsliked] = useState<boolean>(false)

  const toggleLike = () => {
    setIsliked(!isliked)
  }

  return (
    <div className="flex justify-between bg-$white rounded-3xl shadow-$rich mt-8 px-10 py-6">
      <div className="flex">
        {!!auth?.user?.img && (
          <Link href="/mypage">
            <a>
              <UserIcon
                src={auth.user.img}
                size={12}
                className="mx-4 cursor-pointer"
              />
            </a>
          </Link>
        )}
        <div>
          <p className="text-$T6 text-$shade1">
            {formatDate(roadmap.updatedAt)} 更新
          </p>
          <p className="text-$t2 text-$primary">{roadmap.title}</p>
          <p className="text-$indigo">作者</p>
          <div className="flex text-$indigo my-4">
            <Tag name="python" className="mr-2" />
            <Tag name="入門編" className="mr-2" />
          </div>
          <div className="text-$t5 text-$primary2">{roadmap.description}</div>
        </div>
      </div>
      {/* right part icons and likes */}
      <div className="relative pl-5">
        {/* upper-right */}
        <div className="flex items-center w-full">
          <Image src="/list/copy.svg" width={28} height={28} layout={'fixed'} />
          <div className="inline text-$accent4 font-josefin font-semibold text-2xl leading-tight ml-2 mr-4">
            177
          </div>
          <Image
            src="/list/heart-outline.svg"
            width={24}
            height={24}
            layout={'fixed'}
          />
          <div className="inline text-$accent2 font-josefin font-semibold text-2xl leading-tight ml-2">
            573
          </div>
        </div>
        {/* bottom-left */}
        <div>
          <div className="absolute bottom-0 right-0">
            <Image
              onClick={toggleLike}
              src={isliked ? '/list/heart-fill.svg' : '/list/heart-outline.svg'}
              className="cursor-pointer"
              width={32}
              height={32}
              layout={'fixed'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoadmapCard
