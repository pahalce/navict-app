import type { User, Tag, Roadmap, Like, Step, Library } from '$prisma/client'

// FIXME: 多分要らないから消す
export type AuthHeader = {
  authorization: string
}

/** response body */
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

/** create request body */
export type RoadmapCreateBody = Pick<
  Roadmap,
  'title' | 'description' | 'goal' | 'forkedRoadmapId' | 'userId'
> & {
  tags: Pick<Tag, 'name'>[]
  steps: Pick<Step, 'memo' | 'isDone' | 'libraryId'>[]
}
export type StepCreateBody = Pick<
  Step,
  'memo' | 'nextStepId' | 'isDone' | 'roadmapId' | 'libraryId'
>
export type LibraryCreateBody = Pick<Library, 'title' | 'link'>
export type TagCreateBody = Pick<Tag, 'name'>

/** read reqest body */
export type RecommendedLibraryGetBody = [
  Library['id'],
  Library['id'],
  Library['id']
]

/** update reqest body */
export type UserUpdateBody = Partial<
  Pick<
    User,
    | 'name'
    | 'email'
    | 'bio'
    | 'img'
    | 'twitterLink'
    | 'githubLink'
    | 'websiteLink'
  >
>
export type RoadmapUpdateBody = Partial<
  Pick<
    Roadmap,
    'title' | 'description' | 'forkedRoadmapId' | 'firstStepId' | 'userId'
  > & {
    tags: Pick<Tag, 'name'>[]
    steps: Pick<Step, 'memo' | 'nextStepId' | 'isDone' | 'libraryId'>[]
  }
>
export type StepUpdateBody = Partial<
  Pick<Step, 'memo' | 'nextStepId' | 'roadmapId' | 'libraryId'>
>

/** toggle request body */
export type LikeToggleBody = Pick<Like, 'userId' | 'roadmapId'>
