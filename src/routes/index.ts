import { Application } from "express";
import { testRouter } from "./test/router";

const API_VERSION = process.env.API_VERSION;

export const initiateRouter = (app: Application) => {
  const routes = [
    {
      path: "test",
      router: testRouter,
      secure: false,
    },
  ];

  routes.map((route) => {
    app.use(
      `/api/v${API_VERSION}/${route.path}`,
      async (req, res, next) => {
        if (route.secure) {
          if (!req.headers.api_key)
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
