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
exports.getUserById = exports.getAllUser = exports.postUserService = void 0;
const config_1 = require("../config");
const user_1 = require("../entities/user");
const credentialService_1 = require("./credentialService");
const getAllUser = function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = config_1.AppDataSource.manager.find(user_1.User);
            return user;
        }
        catch (error) {
            throw new error(error);
        }
    });
};
exports.getAllUser = getAllUser;
const getUserById = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = config_1.AppDataSource.getRepository(user_1.User).findOne({
                where: { id },
                relations: ["credentials", "appointmentse"]
            });
            return users;
        }
        catch (error) {
            throw new error(error);
        }
    });
};
exports.getUserById = getUserById;
const postUserService = function (user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const credentialId = yield (0, credentialService_1.generatedCredential)({ username: user.username, password: user.password });
            const newUser = yield config_1.AppDataSource.manager.create(user_1.User, {
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                dni_number: user.dni_number,
                appointments: user.appointments,
                credentialsId: credentialId
            });
            yield config_1.AppDataSource.manager.save(newUser);
            console.log(newUser);
            return newUser;
        }
        catch (error) {
            throw error;
        }
    });
};
exports.postUserService = postUserService;
