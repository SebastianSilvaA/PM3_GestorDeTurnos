"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCredential = exports.generatedCredential = void 0;
const config_1 = require("../config");
const utils_1 = require("../utils");
const credentials_1 = require("../entities/credentials");
function generatedCredential(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password }) {
        try {
            const hash = (0, utils_1.encryptPaswword)(password);
            const cred = yield config_1.AppDataSource.manager.create(credentials_1.Credential, {
                username,
                password: hash
            });
            yield config_1.AppDataSource.manager.save(cred);
            return cred.id;
        }
        catch (error) {
            throw new error(error);
        }
    });
}
exports.generatedCredential = generatedCredential;
function checkCredential(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password }) {
        try {
            const credential = yield config_1.AppDataSource.manager.getRepository(credentials_1.Credential).findOne({
                where: { username },
                select: ["id", "password"]
            });
            if (!credential) {
                throw new Error("no se pudo encontrar la credencial");
            }
            const isValid = (0, utils_1.comparePassword)(password, credential.password);
            if (!isValid) {
                throw new Error("invalid credential");
            }
            return credential === null || credential === void 0 ? void 0 : credential.id;
        }
        catch (error) {
            throw new error(error);
        }
    });
}
exports.checkCredential = checkCredential;
