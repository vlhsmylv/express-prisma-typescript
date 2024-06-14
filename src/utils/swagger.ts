import { version } from "../../package.json";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "OpenConnect REST API",
      summary: "REST API for OpenConnect",
      description: "REST API services for OpenConnect applications",
      version,
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        cookieAuth: {
          type: "apiKey",
          in: "cookie",
          name: "token",
        },
      },
    },
    security: [
      {
        cookieAuth: [],
      },
    ],
  },
  apis: ["./src/routes/***/**/docs.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocsRouter = express.Router();

swaggerDocsRouter.use("/docs", swaggerUi.serve);
swaggerDocsRouter.get("/docs", swaggerUi.setup(swaggerSpec));

export default swaggerDocsRouter;
