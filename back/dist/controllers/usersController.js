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
exports.loginUser = exports.postUser = exports.getUserid = exports.getUser = void 0;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Obtener el listado de todos los usuarios");
});
exports.getUser = getUser;
const getUserid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Obtener el detalle de un usuario específico.");
});
exports.getUserid = getUserid;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Registro de un nuevo usuario");
});
exports.postUser = postUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json("Login del usuario a la aplicación");
});
exports.loginUser = loginUser;
