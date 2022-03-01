import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { db } from "./config/index.js";
import Router from "./routes/index.js";
import moment from "moment";

// Express, cors, express json.
const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

try {
	await db.authenticate();
	console.log("Database berhasil connect.");
} catch (error) {
	console.log("Gagal Connect", error);
}

// Router
app.use(Router);

app.listen(5000, () => {
	console.log("Server running at http://localhost:5000");
});
