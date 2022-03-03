import express from "express";
import cron from "node-cron";

const router = express.Router();

import {
	createBlog,
	deleteBlog,
	editBlog,
	getAllBlog,
	getBlog,
} from "../controllers/Blog.js";
router.post("/blogs/create", createBlog);
router.get("/blogs", getAllBlog);
router.get("/blogs/:id", getBlog);
router.delete("/blogs/:id", deleteBlog);
router.put("/blogs/:id", editBlog);

export default router;
