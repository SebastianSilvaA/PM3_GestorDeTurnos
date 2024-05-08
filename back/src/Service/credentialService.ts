import { stringify } from "querystring";
import {  credentials } from "../DB";
import { AppDataSource } from "../config";
import { ICredential } from "../types/credential";
import { comparePassword, encryptPaswword } from "../utils";
import { Credential } from "../entities/credentials";
import { error } from "console";


async function generatedCredential({username, password }: ICredential) : Promise<number | undefined>{
    try {
        const hash: string = encryptPaswword(password)

        const cred = await AppDataSource.manager.create(Credential, {
            username,
            password : hash
        })
        await AppDataSource.manager.save(cred)
        return cred.id

    // const id: number = credentials.length + 1

    // const credential: ICredential = { id, username, password: hash }
    
    // credentials.push(credential)

    // return id
} catch (error:any){
    throw new error(error)
}
}

async function checkCredential({username, password} : ICredential) : Promise<number | string | undefined> {
 try {
    const credential = await AppDataSource.manager.getRepository(Credential).findOne({
        where: { username },
        select: ["id", "password"]
    });


    if(!credential) {
        throw new Error("no se pudo encontrar la credencial")
    }

    const isValid = comparePassword(password, credential.password)
    if(!isValid) {
        throw new Error("invalid credential")
    }

    return credential?.id

} catch (error:any){
    throw new error(error)
}
}

export { generatedCredential, checkCredential}

