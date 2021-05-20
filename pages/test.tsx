import React, { useState } from 'react'
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { InputActionMeta } from 'react-select'
import SelectInput, { SelectOption } from '~/components/parts/SelectInput'
import { apiClient } from '~/utils/apiClient'

type Form = {
  select: SelectOption
}

const options: SelectOption[] = [
  { index: 1, label: 'aa', value: 'aa' },
  { index: 2, label: 'aabb', value: 'aabb' },
  { index: 3, label: 'aabbb', value: 'aabbb' }
]
console.log(options)

const TestPage = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<Form>()

  const setSelectedValue = (options: SelectOption[]) => {
    setValue('select', options)
  }
  const handleCreateOption = (option: SelectOption) => {
    console.log(option)
    setValue('select', option)
  }
  const onInputChange = (keyword) => {
    console.log(keyword)
  }

  const onSubmit: SubmitHandler<Form> = (data) => console.log({ ...data })
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-10/12 mx-auto text-$t4"
    >
      <Controller
        name="select"
        control={control}
        defaultValue={''}
        rules={{ required: false }}
        render={({ field }) => (
          <SelectInput
            field={
              (field as unknown) as ControllerRenderProps<FieldValues, string>
            }
            options={options}
            placeholder={'test'}
            multiple={true}
            onSelectOption={setSelectedValue}
            onCreateOption={handleCreateOption}
            onInputChange={onInputChange}
          />
        )}
      />
      <button type="submit">aaa</button>
    </form>
  )
}

export default TestPage
