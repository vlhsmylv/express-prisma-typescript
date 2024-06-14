import { config } from "dotenv";
import express from "express";
import cors from "cors";

config();

import { initiateRouter } from "./routes";
import swaggerDocs from "./utils/swagger";
import rateLimiter from "./utils/rate-limiter";

const PORT = process.env.PORT || 8080;

if (!PORT) {
  process.exit(1);
}

const app = express();

app.use(express.json());
app.use(cors());

app.use(swaggerDocs);

app.use(rateLimiter);

initiateRouter(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
