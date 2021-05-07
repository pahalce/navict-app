import Link from 'next/link'
import { RoadmapInfo } from '~/server/types'
import { useState } from 'react'
import { getSystemColorFromPercentage } from 'utils/utility'
import AnimatedCircularProgressBar from '$components/parts/AnimatedCircularProgressBar'

type Props = {
  roadmap: RoadmapInfo
}
const RoadmapInProgressCard = ({ roadmap }: Props) => {
  const [systemColor] = useState(
    getSystemColorFromPercentage(roadmap.donePercent)
  )
  return (
    <div className={`w-80 rounded-lg bg-${systemColor} text-center`}>
      {/* title */}
      <p className="text-$t3 text-$white my-4">{roadmap.title}</p>
      {/* content */}
      <div className="bg-$white w-full rounded-b-lg text-$primary">
        <AnimatedCircularProgressBar
          className="text-$T1 px-20 py-8"
          finalValue={roadmap.donePercent}
          text={`${roadmap.donePercent}%`}
        />
        <div className="text-$t4 pb-4">
          <Link href="#">
            <a>ロードマップへ</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoadmapInProgressCard
