import { apiClient } from './apiClient'

export const searchTags = (keyword: string) =>
  apiClient.tags.search._name(keyword).$get()
