import express from "express";
import cron from "node-cron";

const router = express.Router();

import { createBlog, getAllBlog, getBlog } from "../controllers/Blog.js";
router.post("/blogs/create", createBlog);
router.get("/blogs", getAllBlog);
router.get("/blogs/:id", getBlog);

export default router;
