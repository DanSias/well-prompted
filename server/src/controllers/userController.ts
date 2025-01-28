import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
  // Placeholder logic
  res.json([{ id: 1, name: "Daniel Sias" }, { id: 2, name: "Zelda Bean" }]);
};
