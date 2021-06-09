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
import { Library } from '$prisma/client'
import SelectInput, { SelectOption } from '~/components/parts/SelectInput'
import RecommendedLibrarySection from './RecommendedLibrarySection'
import RHFTextarea from '~/components/parts/RHFTextarea'
import { StepWithLib } from '../RoadmapForm'

export type LibraryForm = {
  titleSelect: SelectOption
  link?: LibraryCreateBody['link']
  memo?: StepCreateBody['memo']
}

type StepFormProps = {
  steps: StepWithLib[]
  libTitleOptions: SelectOption[]
  libs: LibraryInfo[]
  handleLibInputChange: (keyword: string) => void
  onSearchLibraries: (keyword: string) => Promise<Library[]>
  onCreateLibrary: (
    title: string,
    link?: string | null | undefined
  ) => Promise<Library>
  onSubmitStep: (step: StepWithLib) => void
  recLibs?: RecommendedLibraryInfo[]
  onGetCurrentRecLibs: () => void | Promise<void>
}

const StepForm = ({
  steps,
  libTitleOptions,
  libs,
  handleLibInputChange,
  onCreateLibrary,
  onSearchLibraries,
  onSubmitStep,
  recLibs,
  onGetCurrentRecLibs
}: StepFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors }
  } = useForm<LibraryForm>()

  useEffect(() => {
    onGetCurrentRecLibs()
  }, [steps])

  const onSubmit: SubmitHandler<LibraryForm> = async (data) => {
    let createLib = true
    let library
    try {
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
        library = await onCreateLibrary(data.titleSelect.value, data.link)
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
      setValue('titleSelect', ('' as unknown) as SelectOption) // ここreact selectの挙動がよくわかんないけどこれで動く
      setValue('link', '')
      setValue('memo', '')
    } catch (err) {
      // unique constraint error of prisma (title + link must be unique)
      if (err.response.data.code === 'P2002') {
        try {
          const existingLibs = await onSearchLibraries(data.titleSelect.value)
          const lib = existingLibs.find(
            (exitstingLib) => exitstingLib.link === data.link
          ) as Library
          const step: StepWithLib = {
            libraryId: lib?.id,
            library: lib,
            memo: data.memo || null,
            nextStepId: null,
            isDone: false
          }
          onSubmitStep(step)
        } catch (err) {
          console.error(err)
        }
      }
    }
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
