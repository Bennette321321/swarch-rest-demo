import express, { type Express, type Request, type Response } from "express";
import { ENV } from "./config/env";
import { connectMongo } from "./config/mongo";
import subscriptionRoute from "./routes/subscription.route";

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ success: true });
});

app.use("/api/v1/subscriptions", subscriptionRoute);

async function start(): Promise<void> {
  await connectMongo();
  app.listen(ENV.PORT, () => {
    console.log(
      `REST Demo App is in ${ENV.NODE_ENV} mode, listening on port ${ENV.PORT}`,
    );
  });
}

start();
