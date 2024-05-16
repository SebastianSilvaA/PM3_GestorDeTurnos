import { Request, Response, NextFunction } from "express";
import UserDto from "../dto/UserDto";


export const validateUserCreation = (req: Request, res: Response, next: NextFunction) => {
    const userData: UserDto = req.body;
    if (!userData.name || !userData.email || !userData.birthdate || !userData.dni_number) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    next();
};