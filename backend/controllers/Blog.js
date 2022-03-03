import Blogs from "../models/BlogModel.js";
import axios from "axios";
import { Sequelize } from "sequelize";
import { Op } from "sequelize";

export const createBlog = async (req, res) => {
	try {
		const now = new Date().getTime() / 1000;
		console.log(now);
		req.body.createdAt = now;
		await Blogs.create(req.body, {}).then((data) => {
			res.json({
				status: "success",
				message: "Created a new blog",
				blogid: data.id,
			});
		});
		console.log(req.body.createdAt);
		// res.json({
		// 	status: "success",
		// 	message: "Created a new blog",
		// 	id: req.id,
		// });
	} catch (err) {
		res.status(400).send(err);
	}
};

export const getAllBlog = async (req, res) => {
	try {
		const blog = await Blogs.findAll();
		res.send(blog);
	} catch (err) {
		res.status(400).send(err);
	}
};

export const getBlog = async (req, res) => {
	try {
		const blog = await Blogs.findOne({
			where: {
				id: req.params.id,
			},
		});
		res.send(blog);
	} catch (err) {
		res.status(400).send(err);
	}
};

export const deleteBlog = async (req, res) => {
	try {
		await Blogs.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			message: "Successfully deleted a blog",
		});
	} catch (err) {
		res.status(400).send(err);
	}
};

export const editBlog = async (req, res) => {
	try {
		await Blogs.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json({
			status: "success",
			message: "Successfully edited a blog",
		});
	} catch (err) {
		res.status(400).send(err);
		console.log(err);
	}
};
