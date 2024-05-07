import { IUser } from "./user"


export enum Status {
    ACTIVE = "ACTTIVE",
    CANCELED = "CANCELED"
}

export interface IAppointment {
    id: number,
    date: string,
    time: string,
    status: Status
    userId: IUser["id"]

}



