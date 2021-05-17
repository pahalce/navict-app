import React, { useState } from 'react'
import { apiClient } from '~/utils/apiClient'
import type {
  RoadmapInfo,
  LibraryInfo,
  StepReqBody,
  RecommendedLibraryInfo,
  TagInfo
} from '$/types/index'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  ActionMeta,
  InputActionMeta,
  OptionsType,
  OptionTypeBase
} from 'react-select'
import ButtonSmall from '~/components/button/ButtonSmall'
import TagSelect from '~/components/roadmaps/basicInfo/TagSelect'
import RHFInput from '~/components/parts/RHFInput'
import RHFTextarea from '~/components/parts/RHFTextarea'

type RoadmapForm = {
  title?: RoadmapInfo['title']
  tagSelect?: { value: string; label: string }[]
  description?: RoadmapInfo['description']
}

const createRoadmapsPageNew = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [] as { value: string; label: string }[]
  )
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<RoadmapForm>()

  const onSubmit: SubmitHandler<RoadmapForm> = (data) =>
    console.log({ ...data })

  const searchTags = async (keyword: string) => {
    const result = await apiClient.tags.search._name(keyword).$get()
    return result.map((tag) => ({
      value: tag.name,
      label: tag.name
    }))
  }

  const handleSelectTag = (
    value: OptionsType<OptionTypeBase>,
    action: ActionMeta<OptionTypeBase>
  ) => {
    if (action.action == 'create-option') {
      const createdOption = value.slice(-1)[0]
      apiClient.tags
        .$post({
          body: {
            name: createdOption.value
          }
        })
        .then((tag) => console.log(tag, ':created'))
    }
  }

  const handleInputChange = (value: string, action: InputActionMeta) => {
    if (value.length === 1) {
      searchTags(value).then((resultTags) => {
        setOptions(resultTags)
        console.log(resultTags)
      })
    }
    if (value.length === 0) {
      setOptions([])
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-3xl mx-auto text-$primary text-$t4"
    >
      {/* basic info section */}
      <div className="w-full my-16">
        <RHFInput
          className="py-2 text-$t1 text-center w-full mb-6"
          name="title"
          register={register}
          placeHolder="タイトルを入力"
          required
        />
        {errors.title && <span>This field is required</span>}
        <Controller
          name="tagSelect"
          control={control}
          defaultValue={''}
          rules={{ required: false }}
          render={({ field }) => (
            <TagSelect
              field={field}
              options={options}
              placeHolder={'関連するキーワードを入力してタグを作成'}
              onSelect={handleSelectTag}
              onInputChange={handleInputChange}
            />
          )}
        />
        <RHFTextarea
          className="w-full bg-$shade3 rounded-lg text-$t4 py-2 px-3 mt-6"
          name="description"
          register={register}
          placeHolder="概要を入力"
        />
        <ButtonSmall text="送信" type="submit" />
      </div>
    </form>
  )
}

export default createRoadmapsPageNew
