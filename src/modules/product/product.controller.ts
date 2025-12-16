import { Controller } from "../../../types/fastify.js";


export const productController = {
  // Product controller methods will go here
  createProduct: async (req, reply) => {
    reply.send({ message: "Product created" });
  }
} satisfies Record<string, Controller>;