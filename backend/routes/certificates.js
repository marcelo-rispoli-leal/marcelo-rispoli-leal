import { getAllCertificates } from "../controllers/certificatesController.js";

async function certificatesRoutes(fastify, _) {
  // GET - Get all certificates
  fastify.get("/certificates", async (request, reply) => {
    try {
      const lang = request.query.lang || "pt";
      const data = await getAllCertificates(lang);
      reply.send(data);
    } catch (error) {
      reply.status(500).send({ message: error.message });
    }
  });
}

export default certificatesRoutes;
