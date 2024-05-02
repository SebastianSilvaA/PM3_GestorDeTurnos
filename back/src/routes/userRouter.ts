import { Router } from "express";
import { getUserid, postUser, getUser, loginUser } from "../controllers/usersController";

const usersRout = Router()


usersRout.get("/:id", getUserid)

usersRout.get("/", getUser)

usersRout.post("/register", postUser)

usersRout.post("/login", loginUser)






export default usersRout