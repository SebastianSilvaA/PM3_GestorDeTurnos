import { IAppointment } from "../types/appointment"


export class  UserDto {
    name: string 
    email: string
    birthdate: Date
    dni_number: number
    username: string
    password: string 
    appointments: IAppointment[]

}


export default UserDto