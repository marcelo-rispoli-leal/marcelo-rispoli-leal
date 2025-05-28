import { getAllHighlights } from "../controllers/highlightsController.js";

async function highlightsRoutes(fastify, _) {
  // GET - Get all highlights
  fastify.get("/api/highlights", async (_, reply) => {
    try {
      const highlights = await getAllHighlights();
      fastify.log.info(`Found ${highlights.length} highlights`);
      reply.send(highlights);
    } catch (error) {
      fastify.log.error("Error when searching for highlights:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });
}

export default highlightsRoutes;
