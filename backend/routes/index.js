import experiencesRoutes from "./experiences.js";
// Import other routes here as needed.

async function routes(fastify, options) {
  // Register all routes
  fastify.register(experiencesRoutes, options);
  // Register other routes here as needed.
}

export default routes;
