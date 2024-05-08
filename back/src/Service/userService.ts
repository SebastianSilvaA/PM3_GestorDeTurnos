

import { Users } from "../DB/user";
import { AppDataSource } from "../config";
import UserDto from "../dto/UserDto";
import { Appointments } from "../entities/appointments";
import { User } from "../entities/user";
import { IUser } from "../types"
import { generatedCredential } from "./credentialService"


 const getAllUser = async function(): Promise<User[]> {
    try {
    //return Users;
    const user = AppDataSource.manager.find(User)
    return user;

    } catch (error:any){
        throw new error(error)
    }
}

const getUserById = async function (id: number) : Promise<User | null> {
    try {
        //const user = Users.find((user: IUser) => user.id === id)
        //return user

        const users = AppDataSource.getRepository(User).findOne({
            where: {id},
            relations: ["credentials", "appointmentse"]
        })
        return users
    } catch (error:any){
        throw new error(error)
    }
    
}


 const  postUserService =  async function(user: UserDto) : Promise<User>{
     try {
        const credentialId = await generatedCredential({username: user.username,  password: user.password})
        // const id = Users.length + 1
        const newUser = await AppDataSource.manager.create(User, {
          name: user.name,
          email: user.email,
          birthdate: user.birthdate,
          dni_number: user.dni_number,
          appointments: user.appointments,
          credentialsId: credentialId
        })
        await AppDataSource.manager.save(newUser)
        console.log(newUser)
        // Users.push(newUser)
        return newUser
     } catch (error: any) {
          throw  error
    }
 }

 export { postUserService, getAllUser, getUserById}