import { getAllGraduations } from "../controllers/graduationsController.js";

async function graduationsRoutes(fastify, _) {
  // GET - Get all graduations
  fastify.get("/api/graduations", async (_, reply) => {
    try {
      const graduations = await getAllGraduations();
      fastify.log.info(`Found ${graduations.length} graduations`);
      reply.send(graduations);
    } catch (error) {
      fastify.log.error("Error when searching for graduations:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });
}

export default graduationsRoutes;
