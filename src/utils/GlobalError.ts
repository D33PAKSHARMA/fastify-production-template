import { ApiError, BadRequestError, NotFoundError } from './ApiError.js';
import { ErrorHandler } from '../../types/fastify.js';
import { hasZodFastifySchemaValidationErrors } from 'fastify-type-provider-zod';

export const GlobalError: ErrorHandler = (error, request, reply) => {
  // zod validation errors
  if (hasZodFastifySchemaValidationErrors(error)) {
    const issues = error.validation;  // Array of ZodIssue objects

    return reply.status(400).send({
      success: false,
      message: "Validation failed",
      errors: issues.map(issue => ({
        field: issue.instancePath.replace("/", ""),   // convert "/email" → "email"
        message: issue.message,
      })),
    });
  }
  // Your existing custom errors
  if (error instanceof ApiError || 
      error instanceof BadRequestError || 
      error instanceof NotFoundError) {
    return reply.status(error.statusCode).send({ message: error.message });
  }

  // For all other errors, return 500
  reply.status(500).send({ error: 'Internal Server Error' });
};
