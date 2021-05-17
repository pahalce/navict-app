import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import {
  ActionMeta,
  InputActionMeta,
  OptionsType,
  OptionTypeBase
} from 'react-select'
import MultiSelectInput from '../../parts/MultiSelectInput'

type Props = {
  options: { value: string; label: string }[]
  placeHolder: string
  onSelect?: (
    value: OptionsType<OptionTypeBase>,
    action: ActionMeta<OptionTypeBase>
  ) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
  field: ControllerRenderProps<FieldValues, string>
}

const TagSelect = ({
  options,
  placeHolder = 'タグを作成',
  onSelect,
  onInputChange,
  field
}: Props) => {
  return (
    <MultiSelectInput
      field={field}
      options={options}
      placeHolder={placeHolder}
      onSelect={onSelect}
      onInputChange={onInputChange}
    />
  )
}

export default TagSelect
