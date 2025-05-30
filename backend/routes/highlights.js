import { getAllHighlights } from "../controllers/highlightsController.js";

async function highlightsRoutes(fastify, _) {
  // GET - Get all highlights
  fastify.get("/highlights", async (request, reply) => {
    try {
      const lang = request.query.lang || "pt";
      const data = await getAllHighlights(lang);
      reply.send(data);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  });
}

export default highlightsRoutes;
