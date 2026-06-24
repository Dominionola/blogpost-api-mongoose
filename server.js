import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import { connectDb } from "./config/db.js";
import UserSchema from "./models/User.js";

dotenv.config();


const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use('/api/v1/blog')

connectDb();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${PORT}`));
