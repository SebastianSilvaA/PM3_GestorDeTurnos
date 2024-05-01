import { Request, Response } from "express"
import { postUserService, getUserService, deleteUserService } from "../Service/userService"
import IUser from "../interfaces/IUser"


export const postUser = async (req: Request, res:Response) => {
    const {name, email, active} = req.body
    const newUser: IUser = await postUserService({name, email, active})
    res.status(201).json(newUser)
 }

export const getUser = async () => { }

export const deleteUser = async () => { }