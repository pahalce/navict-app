// FIXME: middleware化してapp.tsでregisterできたら完璧。

import { AuthUserAdditionalRequest } from '$/types'
import {
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction
} from 'fastify/fastify'
import { RouteGenericInterface } from 'fastify/types/route'
import { IncomingMessage, Server, ServerResponse } from 'node:http'
import { getUserIdByRoadmapId } from './roadmaps'
import { getUserIdByStepId } from './steps'

export const checkJwt = (
  req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
  reply: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >
) => req.jwtVerify().catch((err) => reply.send(err))

export const checkAuthn = (
  req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage> &
    Partial<AuthUserAdditionalRequest>,
  reply: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >,
  done: HookHandlerDoneFunction,
  userId: number
) => {
  if (userId !== req.user.id) return reply.status(403).send()
  done()
}

export const checkAuthzByRoadmapId = async (
  req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage> &
    Partial<AuthUserAdditionalRequest>,
  reply: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >,
  done: HookHandlerDoneFunction,
  roadmapId: number
) => {
  const userId = await getUserIdByRoadmapId(roadmapId)
  if (!userId || userId !== req.user.id) return reply.status(403).send()
  done()
}

export const checkAuthzByStepId = async (
  req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage> &
    Partial<AuthUserAdditionalRequest>,
  reply: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >,
  done: HookHandlerDoneFunction,
  stepId: number
) => {
  const userId = await getUserIdByStepId(stepId)
  if (!userId || userId !== req.user.id) return reply.status(403).send()
  done()
}
