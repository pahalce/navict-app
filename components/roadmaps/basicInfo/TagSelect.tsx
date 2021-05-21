import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import {
  ActionMeta,
  InputActionMeta,
  OptionsType,
  OptionTypeBase
} from 'react-select'
import SelectInput from '../../parts/SelectInput'

type Props = {
  options: { value: string; label: string }[]
  placeholder: string
  onSelect?: (
    value: OptionsType<OptionTypeBase>,
    action: ActionMeta<OptionTypeBase>
  ) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
  field: ControllerRenderProps<FieldValues, string>
}

const setSelectedValue = (options: SelectOption[]) => {
  setValue('select', options)
}
const handleCreateOption = (option: SelectOption) => {
  console.log(option)
  setValue('select', option)
}
const handleInputChange = (keyword) => {
  console.log(keyword)
}

const TagSelect = ({
  options,
  placeholder = 'タグを作成',
  onSelect,
  onInputChange,
  field
}: Props) => {
  return (
    <SelectInput
      field={field}
      options={options}
      placeholder={placeholder}
      multiple={true}
      onSelect={onSelect}
      onInputChange={onInputChange}
    />
  )
}

export default TagSelect
