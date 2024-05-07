import { Request, Response, response } from "express"
import { getAllUser, getUserById, postUserService } from "../Service/userService"



export const getUser = async (req: Request, res: Response) => {
    try {
        const users = await getAllUser()
        res.status(200).json(users)
    } catch (error) {
        throw error
    }
   

}

export const getUserid = async (req: Request, res: Response) => {
try {
    const {id} = req.params
    const user = await getUserById(Number(id))
    if (user) 
        res.status(200).json(user)
    else {
        res.status(400).send("user not found")
    }
} catch (error) {
    
}
     

}
export const postUser = async (req: Request, res: Response) => {
    try {
        const user = req.body
        await postUserService(user)     
   res.status(200).json("Registro de un nuevo usuario")
    } catch (error) {
        throw error
    }
   

}

export const loginUser = async (req: Request, res: Response) => {
    res.status(200).json("Login del usuario a la aplicación")

}


