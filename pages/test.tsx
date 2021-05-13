import React from 'react'
import {
  ActionMeta,
  OptionTypeBase,
  SelectOptionActionMeta
} from 'react-select'
// import { useForm } from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'

// type FormData = {
//   firstName: string
//   lastName: string
// }

const TestPage = () => {
  // const {
  //   register,
  //   watch,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm<FormData>()
  // const onSubmit = (data) => console.log(data)
  // // firstName and lastName will have correct type
  // console.log(watch('firstName'))
  // return (
  //   <>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <label>First Name</label>
  //       <input {...register('firstName')} />
  //       <label>Last Name</label>
  //       <input {...register('lastName', { required: true })} />
  //       {errors.lastName && <span>This field is required</span>}
  //       <input type="submit" />
  //     </form>
  //   </>
  // )

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
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
  return <CreatableSelect isMulti onChange={handleChange} options={options} />
}

export default TestPage
