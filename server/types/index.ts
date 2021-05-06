import type { User, Tag, Roadmap, Like, Step, Library } from '$prisma/client'

export type AuthHeader = {
  authorization: string
}

export type UserWithoutPersonal = Omit<User, 'email' | 'firebaseUid'>

export type LikeInfo = Like

export type TagInfo = Tag

export type LibraryInfo = Library

export type RecommendedLibraryInfo = LibraryInfo & {
  scorePercent: number
}

export type StepInfo = Step & {
  library: LibraryInfo
}

export type RoadmapInfo = Roadmap & {
  user: UserWithoutPersonal
  tags: TagInfo[]
  steps: StepInfo[]
  forkedCount: number
  likedCount: number
  donePercent: number
}

export type UserInfo = UserWithoutPersonal & {
  doingRoadmaps: RoadmapInfo[]
  doneRoadmaps: RoadmapInfo[]
  likeRoadmaps: RoadmapInfo[]
  doneRoadmapsCount: number
  totalLikedCount: number
}
