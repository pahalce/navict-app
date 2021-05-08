import Link from 'next/link'
import { RoadmapInfo } from '~/server/types'
import { useState } from 'react'
import { getSystemColorFromPercentage } from 'utils/utility'
import AnimatedCircularProgressBar from '$components/parts/AnimatedCircularProgressBar'
import Image from 'next/image'

type Props = {
  roadmap: RoadmapInfo
}
const RoadmapInProgressCard = ({ roadmap }: Props) => {
  const [systemColor] = useState(
    getSystemColorFromPercentage(roadmap.donePercent)
  )
  return (
    <div
      className={`w-80 rounded-lg bg-${systemColor} text-center shadow-$rich`}
    >
      {/* title */}
      <p className="text-$t3 text-$white py-6">{roadmap.title}</p>
      {/* content */}
      <div className="bg-$white w-full rounded-b-lg text-$primary py-7">
        <AnimatedCircularProgressBar
          className="text-$T1 px-20 pt-8 mb-7"
          finalValue={roadmap.donePercent}
          text={`${roadmap.donePercent}%`}
        />
        <div className="text-$t4 pb-4">
          <Link href="#">
            <a className={`flex justify-center`}>
              <p className={`mr-4`}>ロードマップへ</p>
              <Image src={`/arrow.svg`} width={9} height={13} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoadmapInProgressCard
