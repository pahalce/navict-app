import { defineController, defineHooks } from './$relay'
import { AuthUserAdditionalRequest } from '$/types'
import { checkJwt, checkAuthn, checkAuthzByRoadmapId } from '$/service/auth'
import {
  getRoadmapInfoById,
  updateRoadmap,
  deleteRoadmap
} from '$/service/roadmaps'
import { isInMethods } from '$/service/http'

export type AdditionalRequest = AuthUserAdditionalRequest

export const hooks = defineHooks(() => ({
  onRequest: (req, reply, done) => {
    if (!isInMethods(req.method, ['PUT', 'DELETE'])) return done()
    return checkJwt(req, reply)
  },
  preHandler: [
    (req, reply, done) => {
      if (!isInMethods(req.method, ['PUT'])) return done()
      return checkAuthn(
        req,
        reply,
        done,
        (req.body as { userId: number }).userId
      )
    },
    (req, reply, done) => {
      if (!isInMethods(req.method, ['PUT', 'DELETE'])) return done()
      return checkAuthzByRoadmapId(
        req,
        reply,
        done,
        (req.params as { roadmapId: number }).roadmapId
      )
    }
  ]
}))

export default defineController(() => ({
  get: async ({ params }) => {
    const roadmap = await getRoadmapInfoById(params.roadmapId)
    if (!roadmap) {
      return { status: 404 }
    }
    return { status: 200, body: roadmap }
  },
  put: async ({ params, body }) => ({
    status: 200,
    body: await updateRoadmap(params.roadmapId, body)
  }),
  delete: async ({ params }) => {
    await deleteRoadmap(params.roadmapId)
    return { status: 204 }
  }
}))
