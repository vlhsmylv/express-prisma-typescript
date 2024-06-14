import express from "express";
import type { Request, Response } from "express";
import TestService from "./service";

// You can import service of current route system from ./service.ts

const testService = new TestService();

const testRouter = express.Router({ mergeParams: true });

testRouter.get("/", async (request: Request, response: Response) => {
  try {
    const announcements = [{ title: "Test Announcement" }];

    console.log(testService.test());

    return response.status(200).json(announcements);
  } catch (err: any) {
    return response.status(500).json(err.message);
  }
});

export default testRouter;
