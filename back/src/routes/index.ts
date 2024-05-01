import { Router } from "express"
import { postUser, getUser, deleteUser } from "../controllers/usersController"

const router: Router= Router()

router.get("/users")
router.post("/users", postUser)
router.delete("/users")


export default router