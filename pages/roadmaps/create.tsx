import React, { useState } from 'react'
import type {
  RoadmapInfo,
  LibraryInfo,
  TagInfo,
  RoadmapCreateBody
} from '$/types/index'
import { Step } from '$prisma/client'
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormRegister
} from 'react-hook-form'
import ButtonSmall from '~/components/button/ButtonSmall'
import RHFInput from '~/components/parts/RHFInput'
import RHFTextarea from '~/components/parts/RHFTextarea'
import BarTop from '~/components/parts/BarTop'
import BarBottom from '~/components/parts/BarBottom'
import StepCard from '~/components/list/StepCard'
import BarMiddle from '~/components/parts/BarMiddle'
import StepForm from '~/components/roadmaps/step/StepForm'
import SelectInput, { SelectOption } from '~/components/parts/SelectInput'
import { searchTags } from '~/utils/tags'
import { makeLibTitleOptions, searchLibraries } from '~/utils/libraries'
import { createRoadmap } from '~/utils/roadmaps'
import GoalForm from '~/components/roadmaps/goal/GoalForm'
import Opener from '~/components/parts/Opener'

type RoadmapForm = {
  title: RoadmapInfo['title']
  tagSelect?: SelectOption[]
  description?: RoadmapInfo['description']
  goal?: RoadmapInfo['goal']
}

export type StepWithLib = Pick<
  Step,
  'memo' | 'nextStepId' | 'isDone' | 'libraryId'
> & { library: LibraryInfo }

const createRoadmapsPageNew = () => {
  const [tagOptions, setTagOptions] = useState<SelectOption[]>([])
  const [libTitleOptions, setLibTitleOptions] = useState<SelectOption[]>([])
  const [libs, setLibs] = useState<LibraryInfo[]>([])
  const [steps, setSteps] = useState<StepWithLib[]>([] as StepWithLib[])
  const [isStepFormOpen, setIsStepFormOpen] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    control
    // formState: { errors } TODO: errorバリデーション
  } = useForm<RoadmapForm>()

  const onSubmit: SubmitHandler<RoadmapForm> = async (data) => {
    const tags: RoadmapCreateBody['tags'] = tagOptions.map((tagOption) => ({
      name: tagOption.label
    }))
    const reqSteps: RoadmapCreateBody['steps'] = steps.map((step) => ({
      isDone: step.isDone,
      memo: step.memo,
      libraryId: step.libraryId
    }))
    const reqBody: RoadmapCreateBody = {
      title: data.title,
      tags,
      description: data.description || null,
      forkedRoadmapId: null,
      steps: reqSteps,
      userId: 1, //FIXME:ちゃんとauthContextからとってくる
      goal: data.goal || null
    }
    console.log(await createRoadmap(reqBody))
  }

  const handleTagInputChange = (keyword: string) => {
    if (keyword.length === 1) {
      searchTags(keyword).then((tags) => {
        const newTagOptions = makeTagOptions(tags)
        setTagOptions(newTagOptions)
      })
    }
    if (keyword.length === 0) {
      setTagOptions([])
    }
  }
  const makeTagOptions = (tags: TagInfo[]) => {
    return tags.map((tag) => ({
      value: tag.name,
      label: tag.name
    }))
  }

  const addStep = (step: StepWithLib) => {
    setSteps([...steps, step])
  }

  const deleteStep = (index: number) => {
    const newSteps = steps.filter((step, i) => i !== index)
    setSteps(newSteps)
  }

  const toggleShowForm = () => {
    setIsStepFormOpen(!isStepFormOpen)
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" text-$primary text-$t4">
      {/* basic info section */}
      <BasicInfo
        register={register}
        tagOptions={tagOptions}
        control={control}
        onTagInputChange={handleTagInputChange}
      />
      {/* create step section */}
      <div className="bg-$tint py-16 w-full flex items-center flex-col">
        <BarTop />
        {steps.map((step, index) => (
          <div key={index} className="w-full max-w-3xl">
            <StepCard
              href={step.library.link || ''}
              src={step.library.img || ''}
              memo={step.memo || ''}
              title={step.library.title}
              canDelete
              onDeleteClick={() => deleteStep(index)}
            />
            <BarMiddle />
          </div>
        ))}
        <Opener
          onClick={toggleShowForm}
          isOpen={isStepFormOpen}
          text={
            steps.length === 0
              ? '最初のステップを決めてみよう'
              : '次のステップを決めてみよう'
          }
        >
          <StepForm
            libs={libs}
            handleLibInputChange={handleLibInputChange}
            libTitleOptions={libTitleOptions}
            addStep={addStep}
          />
        </Opener>
        <BarBottom />
      </div>
      {/* goal section */}
      <GoalForm
        register={(register as unknown) as UseFormRegister<FieldValues>}
      />
      <ButtonSmall text="送信" type="submit" />
    </form>
  )
}

type BasicInfoProps = {
  register: UseFormRegister<RoadmapForm>
  control: Control<RoadmapForm>
  tagOptions: SelectOption[]
  onTagInputChange: (keyword: string) => void
}
const BasicInfo = ({
  register,
  control,
  tagOptions,
  onTagInputChange
}: BasicInfoProps) => {
  return (
    <div className="max-w-3xl mx-auto my-16">
      <RHFInput
        className="py-2 text-$t1 text-center w-full mb-6"
        name="title"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        placeholder="タイトルを入力"
        required
      />
      {/* {errors.title && <span>This field is required</span>} */}
      <Controller
        name="tagSelect"
        control={control}
        defaultValue={''}
        rules={{ required: false }}
        render={({ field }) => (
          <SelectInput
            field={
              (field as unknown) as ControllerRenderProps<FieldValues, string>
            }
            options={tagOptions}
            placeholder={'関連するキーワードを入力してタグを作成'}
            onInputChange={onTagInputChange}
            multiple={true}
          />
        )}
      />
      <RHFTextarea
        className="w-full bg-$shade3 rounded-lg text-$t4 py-2 px-3 mt-6"
        name="description"
        register={(register as unknown) as UseFormRegister<FieldValues>}
        placeholder="概要を入力"
        cols={30}
        rows={8}
      />
    </div>
  )
}

export default createRoadmapsPageNew
