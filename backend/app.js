import express from "express";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

// Middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:3000", "http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/message", messageRouter);

export default app;
