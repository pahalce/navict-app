import { HTTPMethods } from 'fastify/fastify'

export const isInMethods = (method: string, methods: HTTPMethods[]) =>
  methods.includes(method as HTTPMethods)
