import { Router } from "express";
import { getTurns, getTurnsdetail, postAgend, putStatus } from "../controllers/turnsController";
import { validateTurnData } from "../middlewares/turnValidate";



const turnsRout = Router()

turnsRout.get("/", getTurns)

turnsRout.get("/:id", getTurnsdetail)

turnsRout.post("/schedule", validateTurnData,postAgend)

turnsRout.put("/cancel/:id", putStatus)


export default turnsRout
