import { config } from "dotenv";
import express from "express";
import cors from "cors";

config();

import { initiateRouter } from "./routes";

const PORT = process.env.PORT;

if (!PORT) {
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

initiateRouter(app);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
