import { Credential } from "../entities/credentials";

import { Users } from "../DB/user";
import { AppDataSource } from "../config";
import UserDto from "../dto/UserDto";
import { Appointments } from "../entities/appointments";
import { User } from "../entities/user";
import { IUser } from "../types"
import { generateCredential } from "./credentialService"


 const getAllUser = async function(): Promise<User[]> {
    try {
    //return Users;
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find({
      relations: ["credentials", "appointments"],
    });
    return users;

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
            relations: ["credentials", "appointments"]
        })
        return users
    } catch (error:any){
        throw new error(error)
    }
    
}


const postUserService = async function(userData: UserDto): Promise<User> {
    try {
        let newUser: User;
        const credentialsId = await generateCredential(userData);
        
        // Obtener las credenciales completas a partir del ID
        const credentials: Credential | null = await AppDataSource.manager.findOne(Credential, { where: { id: credentialsId } });

        if (!credentials) {
            throw new Error("Credentials not found");
        }

        newUser = new User();
        newUser.name = userData.name;
        newUser.email = userData.email;
        newUser.birthdate = userData.birthdate;
        newUser.dni_number = userData.dni_number;
        newUser.credentials = credentials; // Asignamos las credenciales completas a la relación

        await AppDataSource.manager.save(newUser);
        return newUser;
    } catch (error: any) {
        throw error;
    }
}


 export { postUserService, getAllUser, getUserById}