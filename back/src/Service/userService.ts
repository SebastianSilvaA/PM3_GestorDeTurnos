

import { Users } from "../DB/user";
import { IUser } from "../types"
import { generatedCredential } from "./credentialService"


 const getAllUser = async function(): Promise<IUser[]> {
    try {
         const devolver = await Users;
            return devolver
    } catch (error) {
        throw error
    }
}

const getUserById = async function (id: number) : Promise<IUser | undefined> {
    try {
        const user = Users.find((user: IUser) => user.id === id)
        return user
    } catch (error) {
        throw error
    }
    
}


 const  postUserService =  async function(user: any) : Promise<IUser>{
     try {
        const credentialId = await generatedCredential({username: user.username,  password: user.password})
        const id = Users.length + 1
        const newUser: IUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          birthdate: user.birthdate,
          dni_number: user.dni_number,
          appointments: [],
          credentialsId: credentialId
        }
        Users.push(newUser)
        return newUser
     } catch (error: any) {
          throw  error
    }
 }

 export { postUserService, getAllUser, getUserById}