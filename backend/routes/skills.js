import { getAllSkills } from "../controllers/skillsController.js";

async function skillsRoutes(fastify, _) {
  // GET - Get all skills
  fastify.get("/api/skills", async (_, reply) => {
    try {
      const skills = await getAllSkills();
      fastify.log.info(`Found ${skills.length} skill categories`);
      reply.send(skills);
    } catch (error) {
      fastify.log.error("Error when searching for skills:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });
}

export default skillsRoutes;
