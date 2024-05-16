import { Request, Response, NextFunction } from "express";
import UserDto from "../dto/UserDto";
import { AppDataSource } from "../config";
import { User } from "../entities/user";


export async function validateUserData(req: Request, res: Response, next: NextFunction) {
    const userData = req.body; 
    try {
      
      const existingUser = await AppDataSource.manager.findOne(User, { where: { email: userData.email } });
      if (existingUser) {
        return res.status(400).json({ error: "El usuario ya existe" });
      }
  
    
      if (!userData.name || !userData.email || !userData.birthdate || !userData.dni_number) {
        return res.status(400).json({ error: "Por favor, complete todos los datos obligatorios" });
      }
  
      next(); 
    } catch (error) {
      console.error("Error al validar los datos del usuario:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };