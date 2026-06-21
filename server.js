import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import { connectDb } from "./config/db.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

connectDb();
app.get("/", (req, res) => {});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${PORT}`));
