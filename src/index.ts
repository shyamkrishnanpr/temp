import express, { Request, Response } from "express";
import connectDb from "./startup/db";
import router from "./routes/route"
const app = express();

connectDb();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
app.use(express.json());

app.use("/api/v1",router)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


