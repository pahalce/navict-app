import React from 'react'
import { ControllerRenderProps, FieldValues } from 'react-hook-form'
import {
  ActionMeta,
  GroupTypeBase,
  InputActionMeta,
  OptionsType,
  OptionTypeBase,
  Styles
} from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { systemColorToColorCode } from 'utils/utility'
import { LibOption } from '../roadmaps/step/LibrarySelect'

type Props = {
  options: { value: string; label: string }[] | LibOption[]
  placeholder: string
  multiple: boolean
  onSelect?: (
    value: OptionsType<OptionTypeBase>,
    action: ActionMeta<OptionTypeBase>
  ) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
  field: ControllerRenderProps<FieldValues, string>
}

const SelectInput = ({
  options,
  placeholder = 'select',
  multiple,
  onSelect,
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
  return (
    <CreatableSelect
      {...field}
      isMulti={multiple}
      onChange={(value: LibOption, action) => {
        console.log(value)
        if (onSelect) {
          onSelect((value as unknown) as OptionsType<OptionTypeBase>, action)
        }

        // createしたときはvalueが{label:string, value:string}になるのでそろえる
        //FIXME: この処理はLibrarySelectでしかいらないものだからこうなるならコンポーネント分けたほうがいい。どうせ実装かわるから一旦このまま
        if (!value.id) {
          value.id = null
        }

        if (typeof value.value === 'string') {
          value.value = { title: value.value, link: null }
        }

        field.onChange(value)
      }}
      onInputChange={onInputChange}
      options={options}
      styles={colourStyles}
      placeholder={placeholder}
    />
  )
}

export default SelectInput
