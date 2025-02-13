import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// ✅ FIX: Add middleware in the correct order
app.use(cookieParser()); // ✅ Parses cookies (Must be before routes)
app.use(express.json()); // ✅ Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // ✅ Parses URL-encoded data

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"], // Allow frontend ports
    credentials: true, // ✅ Required for sending cookies
  })
);

// ✅ Debugging - Check if cookies are received
app.use((req, res, next) => {
  console.log("Cookies received:", req.cookies);
  next();
});

// ✅ Use API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// ✅ Start server after DB connection
server.listen(PORT, () => {
  console.log("server is running on PORT:", PORT);
  connectDB();
});
