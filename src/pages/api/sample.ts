import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

import {
  forceHTTPS,
  corsComplete,
  helmetMiddleware,
  apiLimiter,
  loggerMiddleware,
  validateUserSchema,
} from "../../backEnd/middlewares";

// This is a sample API route. It has all the middlewares by default.

const router = createRouter<NextApiRequest, NextApiResponse>()
  .use(forceHTTPS)
  .use(corsComplete)
  .use(helmetMiddleware)
  .use(apiLimiter)
  .use(loggerMiddleware)
  .use(validateUserSchema)
  .get((req, res) => {
    res.json({ test: "testResponse" });
  });

export default router.handler({
  onError: (err: any, req, res) => {
    res.status(err.statusCode || 500).end(err.message);
  },
});
