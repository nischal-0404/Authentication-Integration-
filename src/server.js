import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
const app = express();
dotenv.config();
app.use(express.json());

app.use('/api/', contactRoutes)
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) =>{
  res.send("Welcome to Nodejs + Express js")
})

app.listen(PORT, () => {
  console.log(`Server is running at : http://localhost:${PORT}`);
});
