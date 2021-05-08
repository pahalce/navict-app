import { PrismaClient } from '@prisma/client'
import type { Like } from '$prisma/client'

const prisma = new PrismaClient()

export const toggleLike = async (
  userId: Like['userId'],
  roadmapId: Like['roadmapId']
) => {
  const like = await prisma.like.findFirst({ where: { userId, roadmapId } })
  if (like) {
    await prisma.like.deleteMany({ where: { userId, roadmapId } })
  } else {
    await prisma.like.create({ data: { userId, roadmapId } })
  }
}
