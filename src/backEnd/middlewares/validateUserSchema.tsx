import type { NextApiRequest, NextApiResponse } from "next";
import { userSchema } from "@/backEnd/schemas";

export const validateUserSchema = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function,
) => {
  if (req.method === "POST" || req.method === "PUT") {
    try {
      const parsed = userSchema.parse(req.body);
      req.body = parsed; // Replace the request body with the parsed data
      next();
    } catch (error: any) {
      if (error.issues) {
        return res
          .status(400)
          .json({ message: "Validation failed", errors: error.issues });
      }
      next(error);
    }
  } else {
    next(); // For other methods like GET, do nothing
  }
};
