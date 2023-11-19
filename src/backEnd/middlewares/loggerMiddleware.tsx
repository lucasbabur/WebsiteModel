import type { NextApiRequest, NextApiResponse } from "next";
import axiosLogger from "axios-logger";

export const loggerMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function,
) => {
  axiosLogger.requestLogger(req as any, res as any);
  axiosLogger.responseLogger(res as any);
  next();
};
