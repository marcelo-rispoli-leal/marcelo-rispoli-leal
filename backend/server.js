import Fastify from "fastify";
import { MongoClient, ServerApiVersion } from "mongodb";
import cors from "@fastify/cors"; // Plugin de CORS para Fastify
import dotenv from "dotenv";
import appRoutes from "./routes.js";

dotenv.config({ path: ".env.local" });
const { DB_URI, DB_NAME, DB_HOST, DB_IP, DB_PORT, DB_LOG } = process.env;

const fastify = Fastify({
  logger: DB_LOG === "true", // Enable Fastify logger
});

// Register the CORS plugin
// Allow requests from Vite frontend
await fastify.register(cors, {
  origin: (origin, cb) => {
    const allowedOrigins = Array.isArray(DB_HOST) ? DB_HOST : [DB_HOST];
    if (allowedOrigins.includes(origin) || !origin) {
      cb(null, true);
      return;
    }
    cb(new Error("Not allowed by CORS"));
  },
});

const mongoClient = new MongoClient(DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let experiencesCollection;

async function connectMongo() {
  try {
    await mongoClient.connect();
    fastify.log.info("Successfully connected to MongoDB Atlas!");
    const database = mongoClient.db(DB_NAME);
    experiencesCollection = database.collection("experiences");
  } catch (err) {
    fastify.log.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit if DB connection fails
  }
}

// Register application routes and pass the collection
async function registerAppRoutes() {
  // Passar o cliente MongoDB e o nome do banco em vez da coleção
  fastify.register(appRoutes, { mongoClient, DB_NAME });
}

// Starts the server
const start = async () => {
  try {
    await connectMongo(); // Connect to MongoDB before starting the HTTP server
    await registerAppRoutes(); // Register routes after DB connection and collection initialization
    await fastify.listen({ port: DB_PORT, host: DB_IP });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
