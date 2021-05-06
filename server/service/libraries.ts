import { PrismaClient } from '@prisma/client'
import type { Library } from '$prisma/client'

const prisma = new PrismaClient()

export const createLibrary = (title: Library['title'], link: Library['link']) =>
  prisma.library.create({ data: { title, link } })

/**
 * FIXME:
 * navict-recommenderに問い合わせる様に変更する。
 * goalの仕様固まったら実装修正する。
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getRecommendedLibraries = async (ids: Library['id'][]) => {
  return (await prisma.library.findMany()).slice(0, 3).map((library) => {
    return {
      ...library,
      score: 50
    }
  })
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
