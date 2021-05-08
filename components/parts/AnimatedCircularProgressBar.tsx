import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {
  systemColorToColorCode,
  getSystemColorFromPercentage
} from '~/utils/utility'

type Props = {
  className?: string
  finalValue: number
  text: string
  delay?: number // afawef
}

const AnimatedCircularProgressBar = ({
  className,
  finalValue,
  text,
  delay,
  ...rest
}: Props) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    window.setTimeout(() => {
      setValue(finalValue + 0.1)
    }, delay)
  }, [])

  return (
    <div>
      <CircularProgressbar
        className={className}
        value={value}
        text={text}
        styles={buildStyles({
          textColor: systemColorToColorCode('$primary'),
          pathColor: systemColorToColorCode(
            getSystemColorFromPercentage(value)
          ),
          trailColor: 'none',
          pathTransitionDuration: 0.8
        })}
        {...rest}
      />
    </div>
  )
}

export default AnimatedCircularProgressBar
