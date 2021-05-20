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
import { LibraryInfo, StepInfo } from '~/server/types'
import { Library } from '$prisma/client'
import LibrarySelect, { LibOption } from './LibrarySelect'

type LibraryForm = {
  titleSelect: LibOption
  link?: LibraryInfo['link']
}

type StepFormProps = {
  options: LibOption[]
  onSelectLibrary?: (
    value: LibOption,
    action: ActionMeta<OptionTypeBase>
  ) => void
  createLibrary: (
    title: LibraryInfo['title'],
    link: LibraryInfo['link']
  ) => Promise<Library>
  onSelectLibraryInputChange: (
    newValue: string,
    actionMeta: InputActionMeta
  ) => void
  addStep: (step: StepInfo) => void
}

const StepForm = ({
  options,
  createLibrary,
  onSelectLibrary,
  onSelectLibraryInputChange,
  addStep
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
    // console.log(action)

    if (action.action !== 'create-option') {
      setValue('link', value.value.link)
    }
    // onSelectLibrary(value, action)
  }

  const onSubmit: SubmitHandler<LibraryForm> = async (data) => {
    const titleSelect = data.titleSelect
    const formLink = data.link || ''
    const selectedLink = titleSelect.value.link
    let result, lib: LibraryInfo
    if (titleSelect.id) {
      console.group('selected exitsting lib:')
      result = {
        id: titleSelect.id,
        title: titleSelect.value.title,
        link: data.link
      }
    } else {
      result = {
        title: titleSelect.value.title,
        link: data.link
      }
      lib = await createLibrary(result.title, result.link || null)
      console.group('created new lib:', lib)
      // createLibrary(titleSelect.value, result.link || '')
    }
    console.log(result)
    console.groupEnd()
    // addStep({})
  }
  return (
    <div className="mt-10 w-full">
      <div className="w-full flex mb-4">
        <Controller
          name="titleSelect"
          control={control}
          defaultValue={''}
          rules={{ required: true }}
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
        className="py-2 text-center w-full mb-6 bg-$shade3"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        name="link"
        placeholder="https://navict-app.vercel.app/"
      />
      {errors.titleSelect ? (
        <ButtonSmall disabled={true} text="本やサイトの名前を追加して下さい" />
      ) : (
        <ButtonSmall onClick={handleSubmit(onSubmit)} text="追加" />
      )}
    </div>
  )
}

export default StepForm
