import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log(`API up on: http://localhost:${PORT}`);
});
