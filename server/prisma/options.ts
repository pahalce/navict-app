export const userWithoutPersonalSelect = {
  id: true,
  name: true,
  bio: true,
  img: true,
  twitterLink: true,
  githubLink: true,
  websiteLink: true,
  createdAt: true,
  updatedAt: true
}

export const stepInfoInclude = {
  library: true
}

export const partialRoadmapInfoInclude = {
  user: {
    select: userWithoutPersonalSelect
  },
  tags: true,
  steps: {
    include: stepInfoInclude
  }
}
