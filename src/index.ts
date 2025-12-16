import Fastify from 'fastify';
import { ZodTypeProvider, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { GlobalError } from './utils/GlobalError.js';
import authRoutes from './modules/auth/auth.routes.js';
const PORT = process.env.PORT || 3000;

const app = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// register routes
app.register(authRoutes, { prefix: '/auth' });

// Error handling
app.setErrorHandler(GlobalError);

async function start() {
  try {
    await app.listen({ port: Number(PORT), host: '0.0.0.0' });
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

start();
