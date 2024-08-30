import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/db.js";
import bookRouter from "./routes/bookRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB();
const app = express();

app.use(express.json());

app.use(cors());

app.use("/", bookRouter);

app.listen(PORT, () => {
  console.log(
    `Server listening on port: http://localhost:${PORT}`.cyan.underline
  );
});
