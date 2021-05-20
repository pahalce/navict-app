import { LibraryInfo } from '~/server/types'
import { apiClient } from './apiClient'

export const createLibrary = (
  title: LibraryInfo['title'],
  link: LibraryInfo['link']
) =>
  apiClient.libraries.$post({
    body: {
      title,
      link
    }
  })

export const searchLibraries = (keyword: string) => {
  console.log(encodeURIComponent(keyword))
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
