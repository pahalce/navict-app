import React, { useState } from 'react'
import ButtonSmall from '../button/ButtonSmall'

const SetGoal = () => {
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(!showForm)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <div className="flex flex-col items-center w-full">
      <button
        onClick={handleClick}
        className="bg-$accent2 text-$white text-$t2 rounded-lg py-4 px-8 block mx-auto"
      >
        ゴールの設定
      </button>
      <div className="bg-$accent2 w-4"></div>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between bg-$white rounded-2xl p-4 w-full max-w-4xl mx-auto"
        >
          <input
            className="text-$t3 text-$primary p-2 w-full pb-12"
            type="text"
            placeholder="ゴールをここに書いてみよう"
          />
          <ButtonSmall text="保存" className="w-$fit-content ml-auto" />
          {/* <button
            type="submit"
            className="bg-$accent1 text-$white text-$t3 rounded-md  py-2 px-8  "
          >
            保存
          </button> */}
        </form>
      )}
    </div>
  )
}

const GoalSection = () => {
  const [isGoalSet, setIsGoalSet] = useState(false)
  return (
    <div className="flex justify-center bg-$tint py-16 w-full">
      {!isGoalSet && <SetGoal />}
    </div>
  )
}

export default GoalSection
