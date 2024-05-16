import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./credentials";
import { Appointments } from "./appointments";


@Entity({name: "user"})
export class User {
@PrimaryGeneratedColumn()
id: number

@Column({type:"varchar", length: 200})
name: string 

@Column()
email: string

@Column()
    birthdate: Date
@Column({unique: true,type: "int"})
dni_number: number

@OneToOne(() => Credential)
@JoinColumn({name: "credentialsId"})
credentials: Credential

@OneToMany(() => Appointments, appointments => appointments.user)

appointments: Appointments[]

}