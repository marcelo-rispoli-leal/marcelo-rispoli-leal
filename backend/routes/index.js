import experiencesRoutes from "./experiences.js";
import graduationsRoutes from "./graduations.js";
// Import other routes here as needed.

async function routes(fastify, options) {
  // Register all routes
  fastify.register(experiencesRoutes, options);
  fastify.register(graduationsRoutes, options);
  // Register other routes here as needed.
}

export default routes;
