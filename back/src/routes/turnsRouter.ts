import { Router } from "express";
import { getTurns, getTurnsdetail, postAgend, putStatus } from "../controllers/turnsController";



const turnsRout = Router()

turnsRout.get("/", getTurns)

turnsRout.get("/:id", getTurnsdetail)

turnsRout.post("/schedule", postAgend)

turnsRout.put("/cancel", putStatus)


export default turnsRout
