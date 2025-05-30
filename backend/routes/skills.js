import { getAllSkills } from "../controllers/skillsController.js";

async function skillsRoutes(fastify, _) {
  // GET - Get all skills
  fastify.get("/skills", async (request, reply) => {
    try {
      const lang = request.query.lang || "pt";
      const data = await getAllSkills(lang);
      reply.send(data);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  });
}

export default skillsRoutes;
