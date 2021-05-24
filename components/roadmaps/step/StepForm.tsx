import React, { useEffect } from 'react'
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
import {
  LibraryCreateBody,
  LibraryInfo,
  RecommendedLibraryInfo,
  StepCreateBody
} from '~/server/types'
import SelectInput, { SelectOption } from '~/components/parts/SelectInput'
import { createLibrary } from '~/utils/libraries'
import { StepWithLib } from '~/pages/roadmaps/create'
import RecommendedLibrarySection from './RecommendedLibrarySection'
import RHFTextarea from '~/components/parts/RHFTextarea'

export type LibraryForm = {
  titleSelect: SelectOption
  link?: LibraryCreateBody['link']
  memo?: StepCreateBody['memo']
}

type StepFormProps = {
  libTitleOptions: SelectOption[]
  libs: LibraryInfo[]
  handleLibInputChange: (keyword: string) => void
  addStep: (step: StepWithLib) => void
  recLibs: RecommendedLibraryInfo[]
  onMount: () => void | Promise<void>
}

const StepForm = ({
  libTitleOptions,
  libs,
  handleLibInputChange,
  addStep,
  recLibs,
  onMount
}: StepFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<LibraryForm>()

  useEffect(() => {
    onMount()
  }, [])

  const onSubmit: SubmitHandler<LibraryForm> = async (data) => {
    let createLib = true
    let library
    // user selected library
    if (data.titleSelect.index) {
      console.log('selected')
      library = libs.find((lib) => lib.id === data.titleSelect.index)
      // user selected from recommended library
      if (!library) {
        library = recLibs.find((lib) => lib.id === data.titleSelect.index)
      }
      // set createdLib to true if user changed link
      createLib = library?.link !== data.link
    }
    if (createLib) {
      console.log('create new')
      library = await createLibrary(data.titleSelect.value, data.link)
    }
    if (!library) throw Error('failed to get library')
    const libraryId = library.id

    const step: StepWithLib = {
      libraryId,
      library: library,
      memo: data.memo || null,
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
      <RecommendedLibrarySection recLibs={recLibs} setValue={setValue} />
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
      <RHFTextarea
        className="p-4 w-full mb-6 bg-$shade3"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        name="memo"
        placeholder="メモを追加しよう"
        rows={8}
        cols={20}
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
