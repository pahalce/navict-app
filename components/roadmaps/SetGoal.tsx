import React, { useState } from 'react'
// import ButtonSmall from '../button/ButtonSmall'

// TODO: ゴールを設定ボタンをデザイン通りに作るとき用のコードコメントアウトで残してあるから後で対応決める

const SetGoal = () => {
  const [goal, setGoal] = useState('')
  // const [showForm, setShowForm] = useState(false)
  // const goalRef = useRef<HTMLInputElement>('')

  // const handleClick = () => {
  //   setShowForm(!showForm)
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value)
  }

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault()
  //   setGoal(goalRef.current.value)
  // }

  return (
    <div className="flex flex-col items-center w-full text-$primary">
      {/* <button
        onClick={handleClick}
        className="bg-$accent2 text-$white text-$t2 rounded-lg py-4 px-8 block mx-auto"
      >
        ゴールの設定
      </button> */}
      <p className="text-$t1 mb-8">ゴール</p>
      <form className="flex flex-col justify-between bg-$white rounded-2xl p-4 w-full max-w-4xl mx-auto">
        <input
          className="text-$t3 p-2 w-full pb-12"
          type="text"
          placeholder="ゴールをここに書いてみよう"
          onChange={handleChange}
          value={goal}
        />
      </form>
    </div>
  )
}

const GoalSection = () => {
  // const [isGoalSet, setIsGoalSet] = useState(false)
  return (
    <div className="flex justify-center bg-$tint py-16 w-full">
      <SetGoal />
    </div>
  )
}

export default GoalSection
