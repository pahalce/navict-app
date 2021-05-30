import { RoadmapCreateBody } from '~/server/types'
import { Roadmap } from '$prisma/client'
import { apiClient, headersAuthz } from './apiClient'
export const createRoadmap = (token: string, data: RoadmapCreateBody) =>
  apiClient.roadmaps.$post({ body: data, config: { ...headersAuthz(token) } })
export const getRoadmap = (id: Roadmap['id']) =>
  apiClient.roadmaps._roadmapId(id).$get()
