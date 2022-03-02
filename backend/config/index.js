import { Sequelize } from "sequelize";

export const db = new Sequelize("blogskuy", "root", "", {
	host: "localhost",
	dialect: "mysql",
});
