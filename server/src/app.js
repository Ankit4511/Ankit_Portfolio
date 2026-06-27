import express from "express";
import cors from "cors";
import corsOptions from "./config/cors.js";
import healthRoutes from "./routes/health.routes.js";
import chatRoutes from "./routes/chat.routes.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors(corsOptions));
app.use(healthRoutes);
app.use(chatRoutes);

export default app;