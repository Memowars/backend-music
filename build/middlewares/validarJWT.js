"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const { response, request } = require('express');
const ValidarJWT = (req = request, res = response, next) => {
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición',
        });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_JWT_SEED);
        req._id = payload._id;
        req.email = payload.email;
        console.log('PAYLOAD DE VALIDAR', payload);
    }
    catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido',
        });
    }
    next();
};
exports.ValidarJWT = ValidarJWT;
//# sourceMappingURL=validarJWT.js.map