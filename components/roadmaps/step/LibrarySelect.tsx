import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import {
  ActionMeta,
  InputActionMeta,
  OptionsType,
  OptionTypeBase
} from 'react-select'
import { LibraryInfo } from '~/server/types'
import SelectInput from '../../parts/SelectInput'

export type LibOption = {
  id?: number | null
  value: { title: LibraryInfo['title']; link: LibraryInfo['link'] }
  label: string
}
type Props = {
  options: LibOption[]
  placeholder: string
  onSelect?: (value: LibOption, action: ActionMeta<OptionTypeBase>) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
  field: ControllerRenderProps<FieldValues, string>
  className?: string
}

const LibrarySelect = ({
  options,
  placeholder = '本の名前やサイトの名前を入力してみよう',
  onSelect,
  onInputChange,
  field,
  className
}: Props) => {
  return (
    <div className={className}>
      <SelectInput
        field={field}
        options={options}
        placeholder={placeholder}
        multiple={false}
        onSelect={
          onSelect as (
            value: unknown,
            action: ActionMeta<OptionTypeBase>
          ) => void
        }
        onInputChange={onInputChange}
      />
    </div>
  )
}

export default LibrarySelect
