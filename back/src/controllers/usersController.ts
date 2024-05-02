import { Request, Response, response } from "express"



export const getUser = async (req: Request, res: Response) => {
    res.status(200).json("Obtener el listado de todos los usuarios")

}

export const getUserid = async (req: Request, res: Response) => {
     res.status(200).json("Obtener el detalle de un usuario específico.")

}
export const postUser = async (req: Request, res: Response) => {
     res.status(200).json("Registro de un nuevo usuario")

}

export const loginUser = async (req: Request, res: Response) => {
    res.status(200).json("Login del usuario a la aplicación")

}


