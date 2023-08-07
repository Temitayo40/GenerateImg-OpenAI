import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudniary";

import Post from "../mongodb/models/postModel";

dotenv.config();

const router = express.Router();

export default router;
