import { FieldValues, UseFormRegister } from 'react-hook-form'
import RHFTextarea from '~/components/parts/RHFTextarea'

type Props = {
  register: UseFormRegister<FieldValues>
}

const GoalForm = ({ register }: Props) => {
  return (
    <div className="flex  flex-col bg-$tint p-4 px-16 ">
      <p className="text-$t1 text-center">ゴール</p>
      <RHFTextarea
        className="w-3/5 my-6 mx-auto text-$t3 rounded-3xl shadow-$rich p-8"
        register={register}
        name="goal"
        placeholder="ゴールをここに書いてみよう"
      />
    </div>
  )
}

export default GoalForm
