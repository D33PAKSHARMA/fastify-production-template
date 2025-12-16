import { FastifyInstance } from 'fastify';
import { authController } from './auth.controller.js';
import { RegisterSchema } from './auth.validation.js';

export default async function authRoutes(app: FastifyInstance) {
  app.post('/register',{ schema: { body: RegisterSchema } }, authController.registerHandler);
}