// backend/routes.js
async function routes(fastify, options) {
  const mongoClient = options.mongoClient;
  const DB_NAME = options.DB_NAME;

  if (!mongoClient) {
    fastify.log.error("MongoDB client is not available in routes.");
    return;
  }

  fastify.get("/api/experiences", async (request, reply) => {
    try {
      // Obter a coleção diretamente do cliente MongoDB
      const db = mongoClient.db(DB_NAME);
      const experiencesCollection = db.collection("experiences");

      // Listar todas as coleções disponíveis no banco de dados
      const collections = await db.listCollections().toArray();
      fastify.log.info(
        `Available collections: ${collections.map((c) => c.name).join(", ")}`,
      );

      // Verificar contagem de documentos
      const count = await experiencesCollection.countDocuments({});
      fastify.log.info(`Found ${count} documents in experiences collection.`);

      const experiences = await experiencesCollection.find({}).toArray();
      reply.send(experiences);
    } catch (error) {
      fastify.log.error("Error fetching experiences:", error);
      reply.status(500).send({ message: "Error fetching data from server" });
    }
  });
}

export default routes;
