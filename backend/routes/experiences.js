import { getAllExperiences } from "../controllers/experiencesController.js";

async function experiencesRoutes(fastify, options) {
  // GET - Get all experiences
  fastify.get("/api/experiences", async (request, reply) => {
    try {
      const experiences = await getAllExperiences();
      fastify.log.info(`Found ${experiences.length} experiences`);
      reply.send(experiences);
    } catch (error) {
      fastify.log.error("Error when searching for experiences:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });
}

export default experiencesRoutes;
