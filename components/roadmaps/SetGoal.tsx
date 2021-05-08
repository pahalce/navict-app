import React from 'react'
import { RoadmapInfo } from '$/types/index'

type Props = {
  onGoalChange: (goal: RoadmapInfo['goal']) => void
  goal: RoadmapInfo['goal']
}
const SetGoal = ({ onGoalChange, goal }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onGoalChange(e.target.value)
  }

  return (
    <div className="flex flex-col items-center w-full text-$primary">
      <p className="text-$t1 mb-8">ゴール</p>
      <div className="flex flex-col justify-between bg-$white rounded-2xl shadow-$rich p-4 w-full max-w-4xl mx-auto">
        <input
          className="text-$t3 p-2 w-full pb-12"
          type="text"
          placeholder="ゴールをここに書いてみよう"
          onChange={handleChange}
          value={goal || ''}
        />
      </div>
    </div>
  )
}

const GoalSection = ({ onGoalChange, goal }: Props) => {
  return (
    <div className="flex justify-center bg-$tint py-16 w-full">
      <SetGoal goal={goal} onGoalChange={onGoalChange} />
    </div>
  )
}

export default GoalSection
