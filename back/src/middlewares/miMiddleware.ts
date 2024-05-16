import { Request, Response, NextFunction } from "express";

export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
    const userId: number = Number(req.params.id);
    if (isNaN(userId) || userId <= 0) {
        return res.status(400).json({ message: "Invalid user ID" });
    }
    next();
};