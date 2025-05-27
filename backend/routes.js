// backend/routes.js
async function routes(fastify, options) {
  const experiencesCollection = options.experiencesCollection;

  if (!experiencesCollection) {
    fastify.log.error("Experiences collection is not available in routes.");
    // Optionally, you could throw an error here to prevent the server from starting
    // if the collection is critical for all routes in this file.
    // throw new Error("Experiences collection is not initialized");
    return; // Or handle it gracefully depending on your needs
  }

  fastify.get("/api/experiences", async (request, reply) => {
    try {
      const experiences = await experiencesCollection.find({}).toArray();
      reply.send(experiences);
    } catch (error) {
      fastify.log.error("Error fetching experiences:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });

  // You can add more routes here, for example:
  // fastify.get('/api/another-route', async (request, reply) => { ... });
}

export default routes;
