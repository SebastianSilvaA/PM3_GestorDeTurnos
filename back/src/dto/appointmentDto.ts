import { IUser } from "../types";


export interface turnDto {
    date: string,
    time: string,
    userId: IUser["id"]
}