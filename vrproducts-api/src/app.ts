import "express-async-errors";
import express, { Application } from "express";
import cors from "cors";
import { productRouter } from "./routes";
import { handleErrors } from "./errors/handleErrors";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/product", productRouter);

app.use(handleErrors);

export default app;
