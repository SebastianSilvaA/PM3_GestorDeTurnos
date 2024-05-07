
import { Request, Response, response } from "express"



export const getTurns = async (req: Request, res: Response) => {
    res.status(200).json("Obtener el listado de todos los turnos de todos los usuarios")

}

export const getTurnsdetail = async (req: Request, res: Response) => {
    const { id } = req.params
     res.status(200).send(`Obtener el detalle de un turno específico ${id}`)

}
export const postAgend = async (req: Request, res: Response) => {
     res.status(200).json("Agendar un nuevo turno")

}

export const putStatus = async (req: Request, res: Response) => {
    res.status(200).json("Cambiar el estatus de un turno a “cancelled”.")

}


