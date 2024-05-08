import { Request, Response, response } from "express"
import { getAllUser, getUserById, postUserService } from "../Service/userService"
import { checkCredential } from "../Service/credentialService"



export const getUser = async (req: Request, res: Response) => {
    try {
        const users = await getAllUser()
        res.status(200).json(users)
    } catch (error:any){
        throw new error(error)
    }
   

}

export const getUserid = async (req: Request, res: Response) => {
try {
    const {id} = req.params
    const user = await getUserById(Number(id))
    if (user) 
        res.status(200).json(user)
    else {
        res.status(404).send("user not found")
    }
} catch (error:any){
    throw new error(error)
}
     

}
export const postUser = async (req: Request, res: Response) => {
    try {
        const user = req.body
        await postUserService(user)     
   res.status(201).json({message: "Created User: user", user})
} catch (error:any){
    res.status(400).send("Incorrect dates")
    throw new error(error)
}
   

}

export const loginUser = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
    const credentials = req.body
    const login = await checkCredential(credentials)
    res.status(200).json({message:"User logged", login})

}


