import express from "express";
import cors from "cors";
import greetRoutes from "./routes/greetRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", greetRoutes);

export default app;
