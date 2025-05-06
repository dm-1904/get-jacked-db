import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRouter from "../prisma/api";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

app.use((err: any, _req: any, res: any, _next: any) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`API up on: http://localhost:${PORT}`);
});
