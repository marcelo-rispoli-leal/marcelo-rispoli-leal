import experiencesRoutes from "./experiences.js";
import graduationsRoutes from "./graduations.js";
import skillsRoutes from "./skills.js";
import certificatesRoutes from "./certificates.js";
// Import other routes here as needed.

async function routes(fastify, options) {
  // Register all routes
  fastify.register(experiencesRoutes, options);
  fastify.register(graduationsRoutes, options);
  fastify.register(skillsRoutes, options);
  fastify.register(certificatesRoutes, options);
  // Register other routes here as needed.
}

export default routes;
