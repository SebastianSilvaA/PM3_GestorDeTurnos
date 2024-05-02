import { Router } from "express";
import { getTurns, getTurnsdetail, postAgend, putStatus } from "../controllers/turnsController";



const turnsRout = Router()



turnsRout.get("/", getTurnsdetail)

turnsRout.post("/schedule", postAgend)

turnsRout.put("/cancel", putStatus)


export default turnsRout
