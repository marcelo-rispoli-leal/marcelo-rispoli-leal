import experiencesRoutes from "./experiences.js";
import graduationsRoutes from "./graduations.js";
import skillsRoutes from "./skills.js";
import certificatesRoutes from "./certificates.js";
import highlightsRoutes from "./highlights.js";
// Import other routes here as needed.

async function routes(fastify) {
  // Register all routes
  fastify.register(experiencesRoutes, { prefix: "/api" });
  fastify.register(graduationsRoutes, { prefix: "/api" });
  fastify.register(skillsRoutes, { prefix: "/api" });
  fastify.register(certificatesRoutes, { prefix: "/api" });
  fastify.register(highlightsRoutes, { prefix: "/api" });
  // Register other routes here as needed.
}

export default routes;
