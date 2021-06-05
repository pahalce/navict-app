import { RoadmapCreateBody, RoadmapUpdateBody } from '~/server/types'
import { Roadmap } from '$prisma/client'
import { apiClient, headersAuthz } from './apiClient'
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
