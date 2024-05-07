import { IAppointment } from "./appointment"
import { ICredential } from "./credential"


export interface IUser {
    id?: number,
    name: string
    email: string,
    birthdate: Date,
    dni_number: number,
    appointments: IAppointment[]
    credentialsId: ICredential["id"]
   }