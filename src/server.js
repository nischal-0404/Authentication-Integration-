import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import { errorHandler } from "./middleware/ErrorHandler.js";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();
app.use(express.json());
connectDB();

app.use("/api/contact", contactRoutes);
const PORT = process.env.PORT || 3001;

app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("Welcome to Nodejs + Express js");
});

app.listen(PORT, () => {
  console.log(`Server is running at : http://localhost:${PORT}`);
});
