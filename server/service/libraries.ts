import { PrismaClient } from '@prisma/client'
import type { Library } from '$prisma/client'
import axios from 'axios'
import { RecommendedLibraryInfo } from '$/types'

const prisma = new PrismaClient()

export const createLibrary = async (
  title: Library['title'],
  link: Library['link']
) => {
  // FIXME: seedデータのせいかなんかで、idのconstraintがおかしかったのでいったんクソな対応をした。直す。
  // return await prisma.library.create({ data: { title, link } })
  const lastLibraryId = (await prisma.library.findMany()).slice(-1)[0].id
  return await prisma.library.create({
    data: { id: lastLibraryId + 1, title, link }
  })
}

export const getRecommendedLibraryInfos = async (ids: Library['id'][]) => {
  try {
    const recommendedLibraryInfos: RecommendedLibraryInfo[] = []
    type ResBody = {
      id: string
      score: string
    }[]
    const { data }: { data: ResBody } = await axios.post(
      'https://navict-recommender.herokuapp.com/suggestions',
      {
        library_ids: ids
      }
    )
    console.log({
      ids,
      data
    })
    for (const { id: libraryId, score } of data.slice(0, 3)) {
      const libraryInfo = await prisma.library.findUnique({
        where: { id: +libraryId }
      })
      if (!libraryInfo) continue
      const recommendedLibraryInfo = {
        ...libraryInfo,
        scorePercent: +score * 100
      }
      recommendedLibraryInfos.push(recommendedLibraryInfo)
    }
    return recommendedLibraryInfos
  } catch (e) {
    console.log(e)
    return []
  }
}

export const searchLibrariesByTitle = (title: string) =>
  prisma.library.findMany({
    where: {
      title: {
        contains: title
      }
    }
  })

export const searchLibrariesByLink = (link: string) =>
  prisma.library.findMany({
    where: {
      link: {
        contains: link
      }
    }
  })
