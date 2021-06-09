import { RoadmapCreateBody, RoadmapUpdateBody } from '~/server/types'
import { Roadmap } from '$prisma/client'
import { apiClient, headersAuthz } from './apiClient'
import { SelectOption } from '~/components/parts/SelectInput'
import { StepWithLib } from '$components/roadmaps/RoadmapForm'
export const createRoadmap = (token: string, data: RoadmapCreateBody) =>
  apiClient.roadmaps.$post({ body: data, config: { ...headersAuthz(token) } })
export const updateRoadmap = (
  token: string,
  id: Roadmap['id'],
  data: RoadmapUpdateBody
) =>
  apiClient.roadmaps
    ._roadmapId(id)
    .$put({ body: data, config: { ...headersAuthz(token) } })
export const getRoadmap = (id: Roadmap['id']) =>
  apiClient.roadmaps._roadmapId(id).$get()

export const createReqTags = (tags: SelectOption[]) => {
  return tags.map((tag) => ({
    name: tag.label
  })) as RoadmapCreateBody['tags']
}

export const createReqSteps = (steps: StepWithLib[]) => {
  return steps.map((step) => ({
    isDone: step.isDone,
    memo: step.memo,
    libraryId: step.libraryId
  })) as RoadmapCreateBody['steps']
}
