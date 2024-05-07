import {  credentials } from "../DB";
import { ICredential } from "../types/credential";
import { comparePassword, encryptPaswword } from "../utils";


async function generatedCredential({username, password }: ICredential) : Promise<number>{
    try {
        const hash: string = encryptPaswword(password)

    const id: number = credentials.length + 1

    const credential: ICredential = { id, username, password: hash }
    
    credentials.push(credential)

    return id
    } catch (error) {
        throw error
    }
}

async function checkCredential({username, password} : ICredential) : Promise<number | string | undefined> {
 try {
    const credential = credentials.find(cred => cred.username === username)
    if (!credential) return "User not found"
    if (comparePassword(password, credential.password))

    return credential?.id
 } catch (error) {
    throw error
 }
}

export { generatedCredential, checkCredential}

