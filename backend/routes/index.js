import experiencesRoutes from "./experiences.js";
import graduationsRoutes from "./graduations.js";
import skillsRoutes from "./skills.js";
import certificatesRoutes from "./certificates.js";
import highlightsRoutes from "./highlights.js";
// Import other routes here as needed.

async function routes(fastify, options) {
  // Register all routes
  fastify.register(experiencesRoutes, options);
  fastify.register(graduationsRoutes, options);
  fastify.register(skillsRoutes, options);
  fastify.register(certificatesRoutes, options);
  fastify.register(highlightsRoutes, options);
  // Register other routes here as needed.
}

export default routes;
