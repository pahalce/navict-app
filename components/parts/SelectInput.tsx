import React from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import {
  ActionMeta,
  GroupTypeBase,
  InputActionMeta,
  OptionTypeBase,
  Styles
} from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { systemColorToColorCode } from 'utils/utility'
export type SelectOption = {
  index: number
  value: string
  label: string
}
type Props = {
  options: SelectOption[]
  placeholder: string
  multiple: boolean
  onSelectOption: (index: number) => void
  onCreateOption: (option: SelectOption) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
  field: ControllerRenderProps<FieldValues, string>
}

const SelectInput = ({
  options,
  placeholder = 'select',
  multiple,
  onSelectOption,
  onCreateOption,
  onInputChange,
  field
}: Props) => {
  const colourStyles: Partial<
    Styles<OptionTypeBase, true, GroupTypeBase<OptionTypeBase>>
  > = {
    control: () => ({
      display: 'flex',
      backgroundColor: 'white',
      color: systemColorToColorCode('$shade1'),
      borderColor: systemColorToColorCode('$shade2'),
      borderWidth: '4px',
      borderRadius: '10px',
      height: '3.875em',
      padding: '0.2em',
      cursor: 'text'
    }),
    menu: (styles) => ({
      ...styles,
      padding: '0.8em 2em'
    }),
    indicatorSeparator: () => {
      return {
        display: 'none'
      }
    },
    dropdownIndicator: () => {
      return {
        display: 'none'
      }
    },
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        color: systemColorToColorCode('$primary'),
        padding: '0.5em 1em',
        borderRadius: '0.625rem',
        backgroundColor: isFocused ? 'rgba(92, 196, 222, 0.1)' : 'initial',
        width: 'inherit'
      }
    },
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: 'rgba(118,195,219,0.2)',
        padding: '0.5em',
        borderRadius: '2em'
      }
    },
    multiValueLabel: (styles) => ({
      ...styles,
      color: systemColorToColorCode('$indigo')
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: systemColorToColorCode('$primary2'),
      ':hover': {
        color: 'red'
      }
    })
  }

  const handleChange = (value: SelectOption, action: ActionMeta<any>) => {
    if (action.action == 'select-option') {
      onSelectOption(value.index)
    } else if (action.action == 'create-option') {
      onCreateOption(value)
    }
  }
  return (
    <CreatableSelect
      {...field}
      isMulti={multiple}
      onChange={handleChange}
      onInputChange={onInputChange}
      options={options}
      styles={colourStyles}
      placeholder={placeholder}
    />
  )
}

export default SelectInput
