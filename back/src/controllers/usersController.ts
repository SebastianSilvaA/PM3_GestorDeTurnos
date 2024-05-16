import { Request, Response, response } from "express"
import { getAllUser, getUserById, postUserService } from "../Service/userService"
import { checkCredential } from "../Service/credentialService"



export const getUser = async (req: Request, res: Response) => {
    try {
        const users = await getAllUser()
        res.status(200).json(users)
    } catch (error:any){
        res.status(404).send("User not found")
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
        const userData = req.body;
        const newUser = await postUserService(userData); 
        res.status(201).json({ message: "Created User", user: newUser }); 
    } catch (error: any) {
        res.status(400).send("Incorrect data");
        throw new Error(error);
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const credentials = req.body;
        const loginResponse = await checkCredential(credentials);
        return res.status(200).json(loginResponse);
          }
           catch (error) {
        res.status(400).send("incorrect credentials");
        throw new Error("algo salio mal");
      }
    

}


