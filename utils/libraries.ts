import { LibraryInfo, RecommendedLibraryGetBody } from '~/server/types'
import { apiClient } from './apiClient'

export const createLibrary = (
  title: LibraryInfo['title'],
  link?: LibraryInfo['link']
) =>
  apiClient.libraries.$post({
    body: {
      title,
      link: link || null
    }
  })

export const searchLibraries = (keyword: string) => {
  return apiClient.libraries.searchByTitle
    ._title(encodeURIComponent(keyword))
    .$get()
}

export const makeLibTitleOptions = (libraries: LibraryInfo[]) => {
  return libraries.map((library) => ({
    index: library.id,
    value: library.title,
    label: library.title
  }))
}

export const getRecommendedLibraries = (body: RecommendedLibraryGetBody) =>
  apiClient.libraries.recommended.$post({ body })
