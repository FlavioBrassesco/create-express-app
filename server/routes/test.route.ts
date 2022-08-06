import express, { Request, Response } from "express";
const router = express.Router();

router.route("/test", (req: Request, res: Response) => {
  res.status(200).json({ message: "test route working" });
});

export default router;