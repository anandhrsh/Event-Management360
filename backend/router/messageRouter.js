import express from "express";
import { sendMessage } from "../controller/messageController.js";
import mongoose from "mongoose";

const router = express.Router();

// Simple root route to verify router mount
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    scope: 'message-router',
    path: '/api/v1/message',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
router.get("/health", async (req, res) => {
  try {
    // Check if database is connected
    const dbStatus = mongoose.connection.readyState === 1 ? "connected" : "disconnected";

    res.status(200).json({
      status: "success",
      message: "Server is running",
      database: dbStatus,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server error",
      error: error.message
    });
  }
});

router.post("/send", sendMessage);

export default router;
