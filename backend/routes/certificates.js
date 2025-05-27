import { getAllCertificates } from "../controllers/certificatesController.js";

async function certificatesRoutes(fastify, _) {
  // GET - Get all certificates
  fastify.get("/api/certificates", async (_, reply) => {
    try {
      const certificates = await getAllCertificates();
      fastify.log.info(`Found ${certificates.length} certificates`);
      reply.send(certificates);
    } catch (error) {
      fastify.log.error("Error when searching for certificates:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });
}

export default certificatesRoutes;
