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


const corsOptions = {
  origin: [
    'https://bookdock-web.vercel.app' 
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", bookRouter);

app.listen(PORT, () => {
  console.log(
    `Server listening on port: http://localhost:${PORT}`.cyan.underline
  );
});
