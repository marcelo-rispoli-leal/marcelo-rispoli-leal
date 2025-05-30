import { getAllExperiences } from "../controllers/experiencesController.js";

async function experiencesRoutes(fastify, _) {
  // GET - Get all experiences
  fastify.get("/experiences", async (request, reply) => {
    try {
      const lang = request.query.lang || "pt";
      const data = await getAllExperiences(lang);
      reply.send(data);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  });
}

export default experiencesRoutes;
