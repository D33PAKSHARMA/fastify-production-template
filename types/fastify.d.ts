import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export type Controller = (req: FastifyRequest, rep: FastifyReply) => void;
export type ErrorHandler = (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => void;