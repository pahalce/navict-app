import React, { useState } from 'react'
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
import SelectInput, { SelectOption } from '~/components/parts/SelectInput'
import { LibraryInfo } from '~/server/types'
import { apiClient } from '~/utils/apiClient'
import {
  makeLibTitleOptions,
  searchLibraries,
  createLibrary
} from '~/utils/libraries'
import { searchTags } from '~/utils/tags'

type Form = {
  selectTitle: SelectOption
  link: LibraryInfo['link']
}

const TestPage = () => {
  const [libTitleOptions, setLibTitleOptions] = useState<SelectOption[]>([])
  const [libs, setLibs] = useState<LibraryInfo[]>([])

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors }
  } = useForm<Form>()

  const onSubmit: SubmitHandler<Form> = async (data) => {
    let createLib = true
    if (data.selectTitle.index) {
      const library = libs.find((lib) => lib.id === data.selectTitle.index)
      console.log(library?.link, library)
      createLib = library?.link !== data.link
    }
    if (createLib) {
      const lib = createLibrary(data.selectTitle.value, data.link)
      console.log('create:', lib)
    }
    console.log({ ...data })
  }

  const handleLibInputChange = (keyword: string) => {
    if (keyword.length === 1) {
      searchLibraries(keyword).then((libraries) => {
        const newLibraryOptions = makeLibTitleOptions(libraries)
        setLibTitleOptions(newLibraryOptions)
        setLibs(libraries)
      })
    }
    if (keyword.length === 0) {
      setLibTitleOptions([])
    }
  }

  const handleSelectLibTitleOption = (value: SelectOption | SelectOption[]) => {
    const v = value as SelectOption
    const library = libs.find((lib) => lib.id === v.index)
    setValue('link', library?.link || null)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-10/12 mx-auto text-$t4"
    >
      <Controller
        name="selectTitle"
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
      <RHFInput
        className="py-2 text-center w-full mb-6 bg-$shade3"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        name="link"
        placeholder="https://navict-app.vercel.app/"
      />
      {errors.selectTitle ? (
        <ButtonSmall disabled={true} text="本やサイトの名前を追加して下さい" />
      ) : (
        <ButtonSmall onClick={handleSubmit(onSubmit)} text="追加" />
      )}
    </form>
  )
}

export default TestPage
