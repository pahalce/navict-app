import { PrismaClient } from '@prisma/client'
import type { Tag } from '$prisma/client'

const prisma = new PrismaClient()

export const createTag = (name: Tag['name']) =>
  prisma.tag.create({ data: { name } })

export const searchTags = (name: string) =>
  prisma.tag.findMany({
    where: {
      name: {
        contains: name
      }
    }
  })
