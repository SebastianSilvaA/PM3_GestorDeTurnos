import { Router } from "express"
import { postUser, getUserid } from "../controllers/usersController"
import usersRout from "./userRouter"
import turnsRout from "./turnsRouter"
import appointmentRout from "./appointments"



const router: Router= Router()

router.use("/users", usersRout)
router.use("/appointments", appointmentRout)
router.use("/appointment", turnsRout)


export default router