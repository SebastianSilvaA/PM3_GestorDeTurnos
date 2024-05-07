
import { Request, Response, response } from "express"
import { changeStatus, createTurn, getAllTurns, getTurnById } from "../Service/appointmentService"



export const getTurns = async (req: Request, res: Response) => {

    try {
        const turns = await getAllTurns()
        res.status(200).json(turns)
    } catch (error) {
        throw error
    }
   

}

export const getTurnsdetail = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const detail = await getTurnById(Number(id))
        res.status(200).send(detail)
    } catch (error) {
        throw error 
    }
   

}
export const postAgend = async (req: Request, res: Response) => {
    try {
        const { date, time, userId } = req.body;
        const turn = {date, time, userId}
        const postTurn = createTurn(turn)
        res.status(200).json("Agendar un nuevo turno")
    } catch (error) {
        
    }
    

}

export const putStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const putStatus = await changeStatus(Number(id))
        res.status(200).json("Cambiar el estatus de un turno a “cancelled”.")
    } catch (error) {
        
    }
  

}


