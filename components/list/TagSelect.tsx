import {
  ActionMeta,
  InputActionMeta,
  OptionsType,
  OptionTypeBase
} from 'react-select'
import MultiSelectForm from './MultiSelectForm'

type Props = {
  options: { value: string; label: string }[]
  placeHolder: string
  onSelect?: (
    value: OptionsType<OptionTypeBase>,
    action: ActionMeta<OptionTypeBase>
  ) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
}

const TagSelect = ({ options, onSelect, onInputChange }: Props) => {
  return (
    <MultiSelectForm
      options={options}
      placeHolder={'本の名前やサイトの名前を入力してみよう'}
      onSelect={onSelect}
      onInputChange={onInputChange}
    />
  )
}

export default TagSelect
