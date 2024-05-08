
import { Request, Response, response } from "express"
import { changeStatus, createTurn, getAllTurns, getTurnById } from "../Service/appointmentService"



export const getTurns = async (req: Request, res: Response) => {

    try {
        const {userId } = req.query;
        const turns = await getAllTurns(userId as string)
        res.status(200).json(turns)
    } catch (error:any){
        res.status(404).send("Turns not found")
        throw new error(error)
    }
   

}

export const getTurnsdetail = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const detail = await getTurnById(Number(id))
        res.status(200).send(detail)
    } catch (error:any){
        res.status(404).send("Turn not found")
        throw new error(error)
    }
   

}
export const postAgend = async (req: Request, res: Response) => {
    try {
        const { date, time, userId } = req.body;
        const turn = {date, time, userId}
        const postTurn =  await createTurn(turn)
        res.status(200).json({message: "turn create", postTurn})
     } catch (error:any){
        res.status(400).send("incorrect dates")
        throw new error(error)
    }
    

}

export const putStatus = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const putStatus = await changeStatus(Number(id))
        res.status(200).json({message: "Turn canceled", putStatus})
    } catch (error:any){
        res.status(404).send("Turn not found")
        throw new error(error)
    }
  

}


