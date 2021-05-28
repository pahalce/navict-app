import { RoadmapCreateBody } from '~/server/types'
import { apiClient } from './apiClient'
export const createRoadmap = (data: RoadmapCreateBody) =>
  apiClient.roadmaps.$post({ body: data })
