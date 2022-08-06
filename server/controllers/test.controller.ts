import { Request, Response } from "express";

const test = (req: Request, res: Response) => {
  res.status(200).json({ message: "test controller working" });
};

export default { test };
