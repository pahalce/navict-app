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
  onSubmitStep: (step: StepWithLib) => void
  recLibs?: RecommendedLibraryInfo[]
  onMount?: () => void | Promise<void>
}

const StepForm = ({
  libTitleOptions,
  libs,
  handleLibInputChange,
  onSubmitStep,
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
    if (onMount) {
      onMount()
    }
  }, [])

  const onSubmit: SubmitHandler<LibraryForm> = async (data) => {
    let createLib = true
    let library
    // user selected library
    if (data.titleSelect.index) {
      library = libs.find((lib) => lib.id === data.titleSelect.index)
      // user selected from recommended library
      if (recLibs && !library) {
        library = recLibs.find((lib) => lib.id === data.titleSelect.index)
      }
      // set createdLib to true if user changed link
      createLib = library?.link !== data.link
    }
    if (createLib) {
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
    onSubmitStep(step)
  }

  const handleSelectLibTitleOption = (value: SelectOption | SelectOption[]) => {
    const v = value as SelectOption
    const library = libs.find((lib) => lib.id === v.index)
    setValue('link', library?.link || null)
  }

  return (
    <div className="mt-10 w-full">
      {recLibs && (
        <RecommendedLibrarySection recLibs={recLibs} setValue={setValue} />
      )}
      <p className="text-$t3 text-left pl-4 mb-4 text-$shade1">教材</p>
      <div className="w-full flex mb-4 text-$t4">
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
        className="py-2 pl-4 w-full mb-6 bg-$shade3 text-$t4"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        name="link"
        placeholder="https://navict-app.vercel.app/"
      />
      <p className="text-$t3 text-left pl-4 mb-4 text-$shade1">メモ</p>

      <RHFTextarea
        className="p-4 w-full mb-6 bg-$shade3 text-$t4"
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
