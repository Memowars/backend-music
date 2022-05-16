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
exports.deleteUser = exports.updateUser = exports.getUserByEmail = exports.getUserById = exports.getListUsers = exports.createUser = void 0;
const generarJWT_1 = require("../helpers/generarJWT");
const Users_model_1 = require("../models/Users.model");
const bcrypt = require('bcryptjs');
//CRUD
exports.createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = bcrypt.genSaltSync();
    data.password = bcrypt.hashSync(data.password, salt);
    const datos = yield Users_model_1.UserModel.create(data);
    const token = yield generarJWT_1.generarJWT({ _id: datos._id, email: datos.email });
    return { datos, token };
});
exports.getListUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const AllUsers = yield Users_model_1.UserModel.find();
    return AllUsers;
});
exports.getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userById = yield Users_model_1.UserModel.findById(id);
    return userById;
});
exports.getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userByEmail = yield Users_model_1.UserModel.findOne({ email });
    return userByEmail;
});
exports.updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const userUpdated = yield Users_model_1.UserModel.updateOne({ id }, data);
    return userUpdated;
});
exports.deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userDeletedById = yield Users_model_1.UserModel.deleteOne({ id });
    return userDeletedById;
});
//# sourceMappingURL=user.controller.js.map