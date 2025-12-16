import { Controller } from '../../../types/fastify.js';

export const authController = {
  registerHandler: async (req, reply) => {
    // throw new ApiError('Registration not implemented', 501);
    console.log("body>>>",req.body);
    reply.send({ message: 'User registered' });
  }
  
} satisfies Record<string, Controller>;