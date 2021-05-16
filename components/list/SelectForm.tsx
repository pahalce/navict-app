import React from 'react'
import { ActionMeta, GroupTypeBase, OptionTypeBase, Styles } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { OptionProps } from 'react-select/src/types'
import { systemColorToColorCode } from 'utils/utility'

type Props = {
  options: { value: string; label: string }[]
  placeHolder: string
}

const SelectForm = ({ options, placeHolder = 'select' }: Props) => {
  const colourStyles: Partial<
    Styles<OptionTypeBase, true, GroupTypeBase<OptionTypeBase>>
  > = {
    control: (styles) => ({
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
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: systemColorToColorCode('$indigo')
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: systemColorToColorCode('$primary2'),
      ':hover': {
        color: 'red'
      }
    })
  }

  const handleChange = (
    newValue: any,
    actionMeta: ActionMeta<OptionTypeBase>
  ) => {
    console.group('Value Changed')
    console.log(newValue)
    console.log(`action: ${actionMeta.action}`)
    console.groupEnd()
    if (actionMeta.action == 'create-option') {
      const createdOption = newValue.slice(-1)
      console.log(createdOption)
    }
  }
  return (
    <CreatableSelect
      isMulti
      onChange={handleChange}
      options={options}
      styles={colourStyles}
      placeholder={placeHolder}
    />
  )
}

export default SelectForm
