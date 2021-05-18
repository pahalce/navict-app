import React from 'react'
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
  placeholder?: string
  required?: string | ValidationRule<boolean>
  className?: string
}

const RHFTextarea = ({
  register,
  name,
  placeholder,
  required,
  className
}: Props) => {
  return (
    <textarea
      className={`placeholder-$shade1 text-$primary ${className}`}
      placeholder={placeholder}
      {...register(name, { required })}
      cols={30}
      rows={10}
    ></textarea>
  )
}

export default RHFTextarea
