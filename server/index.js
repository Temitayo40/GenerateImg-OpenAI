import express from "express";
import * as dotenv from "dotenv";

import cors from "cors";

import AppError from "./utlls/appError";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

//routes
app.use("./api/v1/posts", postRoutes);
app.use("./api/v1/dalles", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("Hello from here");
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`));
});

module.exports = app;
