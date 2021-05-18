// Component for React-Hook-Form Input
import React from 'react'
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
  placeholder?: string
  required?: string | ValidationRule<boolean>
  className?: string
}

const RHFInput = ({
  register,
  name,
  placeholder,
  required,
  className
}: Props) => {
  return (
    <input
      className={`placeholder-$shade1 text-$primary ${className}`}
      placeholder={placeholder}
      {...register(name, { required })}
    />
  )
}

export default RHFInput
