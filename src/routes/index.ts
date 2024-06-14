import { Application } from "express";
import * as v1Routes from "./v1";

const API_VERSION = process.env.API_VERSION || 1;

export const initiateRouter = (app: Application) => {
  const routes = [
    {
      version: 1,
      path: "test",
      router: v1Routes.testRouter,
      secure: false,
    },
  ];

  routes.map((route) => {
    app.use(
      `/api/v${API_VERSION}/${route.path}`,
      async (req, res, next) => {
        if (route.secure) {
          if (!req.headers.authorization)
            res.json("Authentication / Authorization failed");

          // Check API key
        } else {
          next();
        }
      },
      route.router
    );
  });
};
