import cors from "cors";

const corsOptions = {
  origin: "https://example.com", // Replace with your allowed origin
  optionsSuccessStatus: 200,
};

export const corsComplete = cors(corsOptions);
