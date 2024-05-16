import { Router } from "express";
import { getUserid, postUser, getUser, loginUser } from "../controllers/usersController";
import { validateUserId } from "../middlewares/miMiddleware";
import { validateUserCreation } from "../middlewares/validateRegister";

const usersRout = Router()


usersRout.get("/:id",validateUserId, getUserid)

usersRout.get("/", getUser)

usersRout.post("/register",validateUserCreation, postUser)

usersRout.post("/login", loginUser)






export default usersRout