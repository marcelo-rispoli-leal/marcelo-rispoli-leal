import { getAllGraduations } from "../controllers/graduationsController.js";

async function graduationsRoutes(fastify, _) {
  // GET - Get all graduations
  fastify.get("/graduations", async (request, reply) => {
    try {
      const lang = request.query.lang || "pt";
      const data = await getAllGraduations(lang);
      reply.send(data);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  });
}

export default graduationsRoutes;
