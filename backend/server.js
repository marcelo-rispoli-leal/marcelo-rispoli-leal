import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";

dotenv.config({ path: ".env.local" });
const { DB_HOST, DB_IP, DB_PORT, DB_LOG } = process.env;

const fastify = Fastify({
  logger: DB_LOG === "true",
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

// Start the server
const start = async () => {
  try {
    // Connect to MongoDB with Mongoose
    await connectDB();

    // Register the routes
    fastify.register(routes);

    // Start the server
    await fastify.listen({ port: DB_PORT, host: DB_IP });
    fastify.log.info(`Server running on ${DB_IP}:${DB_PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
