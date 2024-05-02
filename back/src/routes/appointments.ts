import { Router } from "express";
import { getTurns } from "../controllers/turnsController";


const appointmentRout = Router()

appointmentRout.get("/", getTurns)


export default appointmentRout