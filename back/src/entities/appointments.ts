import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "../types/appointment";
import { User } from "./user";



@Entity({name: "appointments"})
export class Appointments {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "date"})
    date: Date
     
    @Column({type: "time"})
    time: string
    @Column({type: "enum", enum: Status, default: Status.ACTIVE})
    status: Status
     
    @ManyToOne(() => User, user => user.appointmentse)
    user: User
   
}