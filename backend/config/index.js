import { Sequelize } from "sequelize";
import mysql from "mysql2";

export const db = new Sequelize("blogskuy", "root", "", {
	host: "localhost",
	dialect: "mysql",
});

export var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "blogskuy",
	multipleStatements: true,
});
