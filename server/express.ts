import express from "express";
import "express-async-errors";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

// express config
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use((req, res, next) => {
  // @ts-expect-error
  req.locals = {};
  next();
});
// routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "server up and running" });
});

// error middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
