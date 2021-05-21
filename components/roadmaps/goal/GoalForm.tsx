import { FieldValues, UseFormRegister } from 'react-hook-form'
import RHFInput from '~/components/parts/RHFInput'
import RHFTextarea from '~/components/parts/RHFTextarea'

type Props = {
  register: UseFormRegister<FieldValues>
}

const GoalForm = ({ register }: Props) => {
  return (
    <div className="bg-$tint p-4 px-16">
      <p className="text-$t1 text-center">ゴール</p>
      <RHFTextarea
        className="w-full my-6 text-$t3 rounded-3xl shadow-$rich p-8"
        register={register}
        name="goal"
        placeholder="ゴールをここに書いてみよう"
      />
    </div>
  )
}

export default GoalForm
