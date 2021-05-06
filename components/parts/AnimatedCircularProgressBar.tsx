import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Props = {
  className: string
  finalValue: number
  text: string
  styles: {
    rotation?: number
    strokeLinecap?: any
    textColor?: string
    textSize?: string | number
    pathColor?: string
    pathTransition?: string
    pathTransitionDuration?: number
    trailColor?: string
    backgroundColor?: string
  }
  delay?: number // afawef
}

const AnimatedCircularProgressBar = ({
  className,
  finalValue,
  text,
  styles,
  delay = 0,
  ...rest
}: Props) => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    window.setTimeout(() => {
      setValue(finalValue)
    }, delay)
  }, [])

  return (
    <div>
      <CircularProgressbar
        className={className}
        value={value}
        text={text}
        styles={buildStyles(styles)}
        {...rest}
      />
    </div>
  )
}

export default AnimatedCircularProgressBar
