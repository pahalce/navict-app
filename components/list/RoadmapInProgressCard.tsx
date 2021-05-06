import Link from 'next/link'
import { RoadmapInfo } from '~/server/types'
import { useState } from 'react'
import { theme } from '~/tailwind.config'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
// import ChangingProgressProvider from './ChangingProgressProvider'

const getSystemColorFromPercentage = (
  percentage: number
): { systemColor: string; colorCode: string } => {
  let systemColor = '$accent1'
  if (percentage > 33) {
    systemColor = '$accent2'
  } else if (percentage > 66) {
    systemColor = '$accent3'
  }
  return { systemColor, colorCode: getColorCode(systemColor) }
}

const getColorCode = (systemColor: string): string => {
  return theme.colors[systemColor] || ''
}

type Props = {
  roadmap: RoadmapInfo
}
const RoadmapInProgressCard = ({ roadmap }: Props) => {
  const [colorObj] = useState(getSystemColorFromPercentage(roadmap.donePercent))
  return (
    <div className={`w-80 rounded-lg bg-${colorObj.systemColor} text-center`}>
      {/* title */}
      <p className="text-$t3 text-$white my-4">{roadmap.title}</p>
      {/* content */}
      <div className="bg-$white w-full rounded-b-lg text-$primary">
        {/* <ChangingProgressProvider values={[0, roadmap.donePercent]}>
          {(percentage: number) => ( */}
        <CircularProgressbar
          className="text-$T1 px-20 py-8"
          value={roadmap.donePercent}
          text={`${roadmap.donePercent}%`}
          styles={buildStyles({
            textColor: getColorCode('$primary'),
            pathColor: colorObj.colorCode,
            trailColor: 'none'
          })}
        />
        {/* )} */}
        {/* </ChangingProgressProvider> */}
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
