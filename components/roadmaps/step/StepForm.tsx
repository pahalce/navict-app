import React from 'react'
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormRegister
} from 'react-hook-form'
import ButtonSmall from '~/components/button/ButtonSmall'
import RHFInput from '~/components/parts/RHFInput'
import { LibraryInfo, StepInfo } from '~/server/types'
import SelectInput, { SelectOption } from '~/components/parts/SelectInput'
import { createLibrary } from '~/utils/libraries'
import { StepWithLib } from '~/pages/roadmaps/create'

type LibraryForm = {
  titleSelect: SelectOption
  link?: LibraryInfo['link']
}

type StepFormProps = {
  libTitleOptions: SelectOption[]
  libs: LibraryInfo[]
  handleLibInputChange: (keyword: string) => void
  addStep: (step: StepWithLib) => void
}

const StepForm = ({
  libTitleOptions,
  libs,
  handleLibInputChange,
  addStep
}: StepFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<LibraryForm>()

  const onSubmit: SubmitHandler<LibraryForm> = async (data) => {
    let createLib = true
    let library
    // user selected library
    if (data.titleSelect.index) {
      library = libs.find((lib) => lib.id === data.titleSelect.index)
      console.log(library?.link, library)
      // set createdLib to true if user changed link
      createLib = library?.link !== data.link
    }
    if (createLib) {
      library = await createLibrary(data.titleSelect.value, data.link)
      console.log('create:', library)
    }
    if (!library) throw Error('failed to get library')
    const libraryId = library.id

    console.log({ ...data })
    const step: StepWithLib = {
      libraryId,
      library: library,
      memo: null,
      nextStepId: null,
      isDone: false
    }
    addStep(step)
  }

  const handleSelectLibTitleOption = (value: SelectOption | SelectOption[]) => {
    const v = value as SelectOption
    const library = libs.find((lib) => lib.id === v.index)
    setValue('link', library?.link || null)
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
            <SelectInput
              field={
                (field as unknown) as ControllerRenderProps<FieldValues, string>
              }
              options={libTitleOptions}
              placeholder={'本の名前やサイトの名前を入力してみよう'}
              multiple={false}
              onInputChange={handleLibInputChange}
              onSelectOption={handleSelectLibTitleOption}
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
