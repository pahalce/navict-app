import {
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
  HTTPMethods
} from 'fastify/fastify'
import { RouteGenericInterface } from 'fastify/types/route'
import { IncomingMessage, Server, ServerResponse } from 'node:http'

export const checkAuthz = (
  req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
  reply: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >,
  done: HookHandlerDoneFunction,
  methods: HTTPMethods[]
) => {
  if (!methods.includes(req.method as HTTPMethods)) return done()
  return req.jwtVerify().catch((err) => {
    return reply.send(err)
  })
}

export const checkAuthn = (
  req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
  reply: FastifyReply<
    Server,
    IncomingMessage,
    ServerResponse,
    RouteGenericInterface,
    unknown
  >,
  done: HookHandlerDoneFunction,
  methods: HTTPMethods[],
  paramUserId: number,
  authUserId: number
) => {
  if (!methods.includes(req.method as HTTPMethods)) return done()
  if (+paramUserId !== +authUserId) return reply.status(403).send()
  done()
}
