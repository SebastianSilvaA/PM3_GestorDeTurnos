import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser"


const users: IUser[] = []

const Id: number = 1;

export const postUserService = async (userData: UserDto): Promise<IUser>=> { 
    const newUser: IUser = {
        id: Id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser)
    return newUser
}

export const getUserService = async () => { }

export const deleteUserService = async () => { }