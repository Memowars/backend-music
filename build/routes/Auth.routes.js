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
exports.AuthRoute = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const validarJWT_1 = require("../middlewares/validarJWT");
exports.AuthRoute = (app) => {
    const router = express_1.Router();
    app.use('/auth', router);
    router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const login = yield auth_controller_1.loginUser({ email, password });
        if (!login.ok) {
            return res.status(400).json({ ok: false });
        }
        if (login.ok) {
            return res.status(200).json(login);
        }
    }));
    router.get('/renew', validarJWT_1.ValidarJWT, auth_controller_1.revalidarToken);
};
//# sourceMappingURL=Auth.routes.js.map