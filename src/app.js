// src/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { sessionMiddleware } from "./config/session.js";

dotenv.config();

const app = express();

/* ===========================
   middleware
=========================== */
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 세션
app.use(sessionMiddleware);

/* ===========================
   static
=========================== */
app.use(express.static("public"));

/* ===========================
   routes
=========================== */
app.get("/", (req, res) => {
  res.send("🚀 BlueOn V02 API running");
});

export default app;
