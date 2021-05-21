import React from 'react'
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
  placeholder?: string
  required?: string | ValidationRule<boolean>
  className?: string
  cols?: number
  rows?: number
}

const RHFTextarea = ({
  register,
  name,
  placeholder,
  required,
  className,
  cols,
  rows
}: Props) => {
  return (
    <textarea
      className={`placeholder-$shade1 text-$primary ${className}`}
      placeholder={placeholder}
      {...register(name, { required })}
      cols={cols}
      rows={rows}
    ></textarea>
  )
}

export default RHFTextarea
