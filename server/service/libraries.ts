import { PrismaClient } from '@prisma/client'
import type { Library } from '$prisma/client'

const prisma = new PrismaClient()

export const createLibrary = (title: Library['title'], link: Library['link']) =>
  prisma.library.create({ data: { title, link } })

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
