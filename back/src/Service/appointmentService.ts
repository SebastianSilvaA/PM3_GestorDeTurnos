import { strict } from "assert"
import { appointments } from "../DB"
import { IAppointment, Status } from "../types/appointment"
import { turnDto } from "../dto/appointmentDto"
import { error } from "console"
import { CANCELLED } from "dns"


const getAllTurns =  async function () {
    try {
        return appointments
    } catch (error) {
        
    }
}


const getTurnById = async function (id: number): Promise<IAppointment | undefined> {
    try {
        const turns = appointments.find((turn: IAppointment) => turn.id === id )
         return turns
    } catch (error) {
        
    }
    
}


const createTurn = async function ({date, time, userId}: turnDto): Promise<IAppointment> {
    try {
        const id = appointments.length + 1
    const newTurn:IAppointment = {
        id: id,
        date: date,
        time : time,
        status: Status.ACTIVE,
        userId: userId
    } 
    appointments.push(newTurn)
    return newTurn
    } catch {
        throw error
    }
     
    
}

const changeStatus = async function(id:number): Promise<IAppointment | undefined>{
    try {
       const change = appointments.findIndex((turn:IAppointment) => turn.id === id)
        if (change !== -1 ) {
            console.log("encontrado", appointments[change])
            appointments[change].status = Status.CANCELED
            console.log("encontrado 2", appointments[change])
            return appointments[change]
        } else {
            console.log("no se encontro")
        }
       
        
       }  catch (error) {
        throw error
    }
  }

export {getAllTurns, getTurnById, createTurn, changeStatus}