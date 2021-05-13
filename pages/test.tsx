import React from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  firstName: string
  lastName: string
}

const TestPage = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = (data) => console.log(data)
  // firstName and lastName will have correct type
  console.log(watch('firstName'))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input {...register('firstName')} />
        <label>Last Name</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  )
}

export default TestPage
