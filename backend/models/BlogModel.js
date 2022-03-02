import { Sequelize } from "sequelize";
import { db } from "../config/index.js";
const { DataTypes } = Sequelize;
import moment from "moment";

const Blogs = db.define(
	"blog",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			unique: true,
			autoIncrement: true,
		},
		author: {
			type: DataTypes.INTEGER,
		},
		title: {
			type: DataTypes.STRING(60),
		},
		description: {
			type: DataTypes.STRING(255),
		},
		content: {
			type: DataTypes.TEXT("long"),
		},
		createdAt: {
			type: DataTypes.INTEGER,
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

export default Blogs;
