import type { NextApiRequest, NextApiResponse } from "next";

export const forceHTTPS = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function,
) => {
  if (
    process.env.NODE_ENV !== "production" &&
    req.headers["x-forwarded-proto"] !== "https"
  ) {
    return res.status(403).send({ message: "HTTPS required" });
  }
  next();
};
