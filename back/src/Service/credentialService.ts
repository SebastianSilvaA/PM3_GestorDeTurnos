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
        throw new Error("no se pudo encontrar la credencial");
      }
  
      const isValid = comparePassword(password, credential.password);
      if (!isValid) {
        throw new Error("invalid credential");
      }
  
      const user = await AppDataSource.manager.getRepository(User).findOne({
        where: { id: credential.id },
        relations: ["credentials", "appointments"] 
      });
  
      if (!user) {
        return {
          message: "User logged",
          credentialId: credential.id
        };
      }
  
      return {
        message: "User logged",
        credentialId: credential.id,
        user: user
      };
  
    } catch (error) {
      throw new Error("algo salio mal");
    }
  }

export { generateCredential, checkCredential}

