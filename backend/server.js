import app from "./app.js";
import dotenv from "dotenv";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dbConnection } from "./database/dbConnection.js";

// ESM __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const envPath = existsSync(path.join(__dirname, "config/.env"))
  ? path.join(__dirname, "config/.env")
  : path.join(__dirname, ".env");
dotenv.config({ path: envPath });

// Connect DB then start server
const start = async () => {
  await dbConnection();
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`🚀 Server listening at port ${port}`);
  });
};

start();
