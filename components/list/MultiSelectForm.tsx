import React from 'react'
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

const colourStyles: Partial<
  Styles<OptionTypeBase, true, GroupTypeBase<OptionTypeBase>>
> = {
  control: () => ({
    display: 'flex',
    backgroundColor: 'white',
    borderColor: systemColorToColorCode('$shade2'),
    borderWidth: '4px',
    borderRadius: '10px',
    height: '3.875em',
    padding: '0.2em'
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

type Props = {
  options: { value: string; label: string }[]
  placeHolder: string
  onSelect?: (
    value: OptionsType<OptionTypeBase>,
    action: ActionMeta<OptionTypeBase>
  ) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
}

const MultiSelectForm = ({
  options,
  placeHolder = 'select',
  onSelect,
  onInputChange
}: Props) => {
  return (
    <CreatableSelect
      isMulti
      onChange={onSelect}
      onInputChange={onInputChange}
      options={options}
      styles={colourStyles}
      placeholder={placeHolder}
    />
  )
}

export default MultiSelectForm
