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
const userService_1 = require("../Service/userService");
const credentialService_1 = require("../Service/credentialService");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getAllUser)();
        res.status(200).json(users);
    }
    catch (error) {
        throw new error(error);
    }
});
exports.getUser = getUser;
const getUserid = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.getUserById)(Number(id));
        if (user)
            res.status(200).json(user);
        else {
            res.status(404).send("user not found");
        }
    }
    catch (error) {
        throw new error(error);
    }
});
exports.getUserid = getUserid;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        yield (0, userService_1.postUserService)(user);
        res.status(201).json({ message: "Created User: user", user });
    }
    catch (error) {
        res.status(400).send("Incorrect dates");
        throw new error(error);
    }
});
exports.postUser = postUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
    }
    const credentials = req.body;
    const login = yield (0, credentialService_1.checkCredential)(credentials);
    res.status(200).json({ message: "User logged", login });
});
exports.loginUser = loginUser;
