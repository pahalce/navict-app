import { PrismaClient } from '@prisma/client'
import type { Like } from '$prisma/client'

const prisma = new PrismaClient()

export const createLike = (
  userId: Like['userId'],
  roadmapId: Like['roadmapId']
) => prisma.like.create({ data: { userId, roadmapId } })

export const deleteLike = (id: Like['id']) =>
  prisma.like.delete({ where: { id } })
