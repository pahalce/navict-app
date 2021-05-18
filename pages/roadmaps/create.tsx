import React, { useState } from 'react'
import { apiClient } from '~/utils/apiClient'
import type {
  RoadmapInfo,
  LibraryInfo,
  StepReqBody,
  RecommendedLibraryInfo,
  TagInfo,
  StepInfo
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
import BarTop from '~/components/parts/BarTop'
import BarBottom from '~/components/parts/BarBottom'
import OpenStepForm from '~/components/roadmaps/step/OpenStepForm'
import StepCard from '~/components/list/StepCard'
import BarMiddle from '~/components/parts/BarMiddle'
import StepForm from '~/components/roadmaps/step/StepForm'
import { LibOption } from '~/components/roadmaps/step/LibrarySelect'

type RoadmapForm = {
  title?: RoadmapInfo['title']
  tagSelect?: { value: string; label: string }[]
  description?: RoadmapInfo['description']
}

const createRoadmapsPageNew = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [] as { value: string; label: string }[]
  )
  const [libOptions, setLibOptions] = useState<LibOption[]>([] as LibOption[])
  const [steps, setSteps] = useState<StepInfo[]>([] as StepInfo[])
  const [isStepFormOpen, setIsStepFormOpen] = useState<boolean>(false)

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
  const searchLibrary = async (keyword: string) => {
    const result = await apiClient.libraries.searchByTitle
      ._title(keyword)
      .$get()
    return result.map(
      (library) =>
        ({
          id: library.id,
          value: { title: library.title, link: library.link },
          label: library.title
        } as LibOption)
    )
  }

  const handleSelectTagInputChange = (
    value: string,
    action: InputActionMeta
  ) => {
    if (value.length === 1) {
      searchTags(value).then((resultTags) => {
        setOptions(resultTags)
      })
    }
    if (value.length === 0) {
      setOptions([])
    }
  }

  const addStep = (step: StepInfo) => {
    setSteps([...steps, step])
  }

  const deleteStep = (stepId: StepInfo['id']) => {
    const newSteps = steps.filter((step) => step.id !== stepId)
    setSteps(newSteps)
  }

  const toggleShowForm = () => {
    setIsStepFormOpen(!isStepFormOpen)
  }

  const createLibrary = async (
    title: LibraryInfo['title'],
    link: LibraryInfo['link']
  ) => {
    const result = await apiClient.libraries.$post({
      body: {
        title,
        link
      }
    })
    return result
  }

  // const handleSelectLibrary = (
  //   value: LibOption,
  //   action: ActionMeta<OptionTypeBase>
  // ) => {
  //   if (action.action !== 'create-option') {
  //     // setValue(name:'')
  //     console.log(value.value.title, value.value.link)
  //   } else {
  //     console.log('c:', value.value)
  //   }
  // }

  const handleSelectLibraryInputChange = (
    value: string,
    action: InputActionMeta
  ) => {
    if (value.length === 1) {
      searchLibrary(value).then((resultLib) => {
        setLibOptions(resultLib)
      })
    }
    if (value.length === 0) {
      setLibOptions([])
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" text-$primary text-$t4">
      {/* basic info section */}
      <div className="max-w-3xl mx-auto my-16">
        <RHFInput
          className="py-2 text-$t1 text-center w-full mb-6"
          name="title"
          register={register}
          placeholder="タイトルを入力"
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
              placeholder={'関連するキーワードを入力してタグを作成'}
              onInputChange={handleSelectTagInputChange}
            />
          )}
        />
        <RHFTextarea
          className="w-full bg-$shade3 rounded-lg text-$t4 py-2 px-3 mt-6"
          name="description"
          register={register}
          placeholder="概要を入力"
        />
      </div>
      {/* create step section */}
      <div className="bg-$tint py-16 w-full flex items-center flex-col">
        <BarTop />
        {steps.map((step) => (
          <div key={step.id} className="w-full max-w-3xl">
            <StepCard
              href={step.library.link || ''}
              src={step.library.img || ''}
              memo={''}
              title={step.library.title}
              canDelete
              onDeleteClick={() => deleteStep(step.id)}
            />
            <BarMiddle />
          </div>
        ))}
        <OpenStepForm
          onClick={toggleShowForm}
          isOpen={isStepFormOpen}
          text={
            steps.length === 0
              ? '最初のステップを決めてみよう'
              : '次のステップを決めてみよう'
          }
        >
          <StepForm
            // onSelectLibrary={handleSelectLibrary}
            createLibrary={createLibrary}
            onSelectLibraryInputChange={handleSelectLibraryInputChange}
            options={libOptions}
          />
        </OpenStepForm>
        <BarBottom />
      </div>
      <ButtonSmall text="送信" type="submit" />
    </form>
  )
}

export default createRoadmapsPageNew
