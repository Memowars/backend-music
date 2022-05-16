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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revalidarToken = exports.loginUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const Users_model_1 = require("../models/Users.model");
const generarJWT_1 = require("../helpers/generarJWT");
const { response } = require('express');
const loginUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    const user = yield Users_model_1.UserModel.findOne({ email });
    try {
        if (user === null) {
            return { ok: false, msg: 'El usuario no esta registrado' };
        }
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return { ok: false, msg: 'Datos incorrectos' };
        }
        const _id = user._id === null ? '' : user._id;
        const token = yield (0, generarJWT_1.generarJWT)({ _id: _id, email });
        return { ok: validPassword, msg: 'Login exitoso ', _id, email, token };
    }
    catch (error) {
        console.error(error);
    }
});
exports.loginUser = loginUser;
const revalidarToken = (req, res = response) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id, email } = req;
    const token = yield (0, generarJWT_1.generarJWT)({ _id, email });
    res.json({
        ok: true,
        token,
        _id,
        email,
    });
});
exports.revalidarToken = revalidarToken;
//# sourceMappingURL=auth.controller.js.map