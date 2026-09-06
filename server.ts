import { configDotenv } from "dotenv";
import express, { type Express, type Request, type Response } from "express";
import { ENV } from "./config/env";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(ENV.PORT, () => {
  console.log(
    `REST Demo App is in ${ENV.NODE_ENV} mode, listening on port ${ENV.PORT}`,
  );
});
