import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const authenticateJWT = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function,
) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: any, user: any) => {
        if (err) {
          return res.status(403);
        }
        req.body = user;
        next();
      },
    );
  } else {
    return res.status(401);
  }
};
