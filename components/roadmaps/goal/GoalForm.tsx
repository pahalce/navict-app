import { FieldValues, UseFormRegister } from 'react-hook-form'
import RHFTextarea from '~/components/parts/RHFTextarea'

type Props = {
  register: UseFormRegister<FieldValues>
}

const GoalForm = ({ register }: Props) => {
  return (
    <div className="flex-col w-full">
      <p className="w-full text-$t1 text-center mb-8">ゴール</p>
      <RHFTextarea
        className="w-full text-$t3 rounded-3xl shadow-$rich p-6"
        register={register}
        name="goal"
        cols={60}
        rows={8}
        placeholder="ゴールをここに書いてみよう"
      />
    </div>
  )
}

export default GoalForm
