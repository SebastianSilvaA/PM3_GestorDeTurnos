import { stringify } from "querystring";
import {  credentials } from "../DB";
import { AppDataSource } from "../config";
import { ICredential } from "../types/credential";
import { comparePassword, encryptPaswword } from "../utils";
import { Credential } from "../entities/credentials";
import { error } from "console";
import { User } from "../entities/user";


async function generateCredential(userData: ICredential): Promise<number | undefined> {
    try {
        const hash: string = encryptPaswword(userData.password); 
        const cred = await AppDataSource.manager.create(Credential, {
            username: userData.username,
            password: hash
        });
        await AppDataSource.manager.save(cred);
        return cred.id;
    } catch (error: any) {
        throw error; 
    }
}

  
  interface LoginResponse {
    message: string;
    credentialId?: number; 
    user?: User;
  }
  
  

async function checkCredential({ username, password }: ICredential): Promise<LoginResponse> {
  try {
    const credential = await AppDataSource.manager.getRepository(Credential).findOne({
      where: { username },
      select: ["id", "password"]
    });

    if (!credential) {
      throw new Error("Usuario no encontrado");
    }

    const isValid = await comparePassword(password, credential.password);
    if (!isValid) {
      throw new Error("Contraseña incorrecta");
    }

    const user = await AppDataSource.manager.getRepository(User).findOne({
      where: { id: credential.id },
      relations: ["credentials", "appointments"]
    });

    if (!user) {
      throw new Error("No se pudo encontrar la información del usuario");
    }

    return {
      message: "Usuario autenticado",
      credentialId: credential.id,
      user: user
    };

  } catch (error:any) {
    throw new Error(error.message);
  }
}

export { generateCredential, checkCredential}

