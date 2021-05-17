// Component for React-Hook-Form Input
import React from 'react'
import { FieldValues, UseFormRegister, ValidationRule } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  name: string
  placeHolder?: string
  required?: string | ValidationRule<boolean>
  className?: string
}

const RHFInput = ({
  register,
  name,
  placeHolder,
  required,
  className
}: Props) => {
  return (
    <input
      className={`placeholder-$shade1 text-$primary ${className}`}
      placeholder={placeHolder}
      {...register(name, { required })}
    />
  )
}

export default RHFInput
