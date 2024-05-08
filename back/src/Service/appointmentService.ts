import { strict } from "assert"
import { appointments } from "../DB"
import { IAppointment, Status } from "../types/appointment"
import { turnDto } from "../dto/appointmentDto"
import { error, time } from "console"
import { CANCELLED } from "dns"
import { Appointments } from "../entities/appointments"
import { AppDataSource } from "../config"
import { User } from "../entities/user"


const getAllTurns =  async function (userId: string) : Promise<Appointments[]> {
    try {
        const appointments = await AppDataSource.getRepository(Appointments).find({
            where: userId ? { user: {id: Number(userId)}} : {},
            relations: ["user"]
        });
        if(appointments.length === 0) {
            throw new Error("No appointments found")
        }
        return appointments
    } catch (error:any){
        throw new error(error)
    }
}


const getTurnById = async function (id: number) {
    try {
        const turns = AppDataSource.manager.getRepository(Appointments).findOne({
            where : {id},
            relations: ["user"]
        })
        if (!turns){
            throw new Error("appointment not found")
        }

         return turns
        } catch (error:any){
            throw new error(error)
        }
    
}


const createTurn = async function (turn : turnDto)  {
    try {
      const user = await AppDataSource.getRepository(User).findOne({
        where:  {id : turn.userId},
      })
      if (!user) {
        throw new Error("User for this appointment not found")
      }
      const app = {
        date: turn.date,
        time: turn.time,

      }
      const newTurn = await AppDataSource.getRepository(Appointments).save({
    ...app,
    user,
      })
      if(!newTurn) {
        throw new Error("appointment not created")
      }

    return newTurn
} catch (error:any){
    throw new error(error)
}
     
    
}

const changeStatus = async function(id:number){
    try {
       const change = await AppDataSource.getRepository(Appointments).findOne({
        where: {id},
        relations: ["user"],
       });
       if (!change) {
        throw new Error("appointment not found")
       }
       const update = await AppDataSource.getRepository(Appointments).save({...change, status: Status.CANCELED});
       if (!update) {
        throw new Error("Appointment not cancelled")
       }
       return update;

        
       
        
       }  catch (error) {
        throw error
    }
  }

export {getAllTurns, getTurnById, createTurn, changeStatus}