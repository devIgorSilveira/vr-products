import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { productRouter } from "./routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/product", productRouter);

export default app;
