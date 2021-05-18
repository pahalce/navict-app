import React from 'react'
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormRegister
} from 'react-hook-form'
import {
  ActionMeta,
  InputActionMeta,
  OptionsType,
  OptionTypeBase
} from 'react-select'
import ButtonSmall from '~/components/button/ButtonSmall'
import RHFInput from '~/components/parts/RHFInput'
import { LibraryInfo } from '~/server/types'
import { Library } from '$prisma/client'
import LibrarySelect, { LibOption } from './LibrarySelect'

type LibraryForm = {
  titleSelect: LibraryInfo['title']
  link?: LibraryInfo['link']
}

type StepFormProps = {
  options: LibOption[]
  // onSelectLibrary: (
  //   value: LibOption,
  //   action: ActionMeta<OptionTypeBase>
  // ) => void
  createLibrary: (
    title: LibraryInfo['title'],
    link: LibraryInfo['link']
  ) => Promise<Library>
  onSelectLibraryInputChange: (
    newValue: string,
    actionMeta: InputActionMeta
  ) => void
}

const StepForm = ({
  options,
  createLibrary,
  // onSelectLibrary,
  onSelectLibraryInputChange
}: StepFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<LibraryForm>()

  const handleSelectLibrary = (
    value: LibOption,
    action: ActionMeta<OptionTypeBase>
  ) => {
    if (action.action !== 'create-option') {
      setValue('link', value.value.link)
    }
    // onSelectLibrary(value, action)
  }

  const onSubmit: SubmitHandler<LibraryForm> = (data) => {
    // if
    // createLibrary()
    console.log({ ...data })
  }
  return (
    <div className="mt-10 w-full">
      <div className="w-full flex mb-4">
        <Controller
          name="titleSelect"
          control={control}
          defaultValue={''}
          rules={{ required: false }}
          render={({ field }) => (
            <LibrarySelect
              className="w-full"
              field={
                (field as unknown) as ControllerRenderProps<FieldValues, string>
              }
              options={options}
              placeholder={'本の名前やサイトの名前を入力してみよう'}
              onSelect={handleSelectLibrary}
              onInputChange={onSelectLibraryInputChange}
            />
          )}
        />
      </div>
      <RHFInput
        className="py-2 text-$t1 text-center w-full mb-6 bg-$shade3"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        name="link"
        required
        placeholder="https://navict-app.vercel.app/"
      />
      {errors.link ? (
        <ButtonSmall disabled={true} text="本やサイトの名前を追加して下さい" />
      ) : (
        <ButtonSmall onClick={handleSubmit(onSubmit)} text="追加" />
      )}
    </div>
  )
}

export default StepForm
