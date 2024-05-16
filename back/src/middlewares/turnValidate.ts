import { Request, Response, NextFunction } from 'express';
import { turnDto } from '../dto/appointmentDto';

export async function validateTurnData(req: Request, res: Response, next: NextFunction) {
    const turnData: turnDto = req.body; // Suponiendo que los datos del turno están en el cuerpo de la solicitud
    try {
      // Verificar si se proporciona un ID de usuario
      if (!turnData.userId) {
        return res.status(400).json({ error: "Se requiere un ID de usuario" });
      }
  
      // Verificar si la fecha no supera los 5 meses
      const currentDate = new Date();
      const turnDate = new Date(turnData.date);
      const fiveMonthsAhead = new Date(currentDate.setMonth(currentDate.getMonth() + 5));
      if (turnDate > fiveMonthsAhead) {
        return res.status(400).json({ error: "La fecha no puede estar más de 5 meses en el futuro" });
      }
  
      next(); // Continuar con el siguiente middleware si todo está bien
    } catch (error) {
      console.error("Error al validar los datos del turno:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  };