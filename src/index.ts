import express, { Request, Response } from "express";
import helmet from "helmet";
import connectDb from "./startup/db";
import router from "./routes/route";
const app = express();

app.use(helmet());

connectDb();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});
app.use(express.json());

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
