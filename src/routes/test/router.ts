import express from "express";
import type { Request, Response } from "express";
import { body, validationResult } from "express-validator";

import * as TestService from "./service";

export const testRouter = express.Router({ mergeParams: true });

/**
 *
 * @swagger
 *
 */
testRouter.get("/", async (request: Request, response: Response) => {
  // const id: string = request.params.id;

  try {
    // TestService.listAnnouncements(id)
    const announcements = [{ title: "Test Announcement" }];

    return response.status(200).json(announcements);
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
});
