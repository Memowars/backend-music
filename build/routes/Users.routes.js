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
exports.UserRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const user_controller_1 = require("../controller/user.controller");
const UserRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/users', router);
    router.post('/createUser', [
        (0, express_validator_1.body)('userName', 'El usuario es requerido').not().isEmpty(),
        (0, express_validator_1.body)('email', 'El email valido es requerido').isEmail().normalizeEmail(),
        (0, express_validator_1.body)('password', 'Elije una contraseña valida con más de 5 caracteres').isLength({
            min: 5,
        }),
    ], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_2.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        const { email } = req.body;
        const existingEmail = yield (0, user_controller_1.getUserByEmail)(email);
        try {
            if (existingEmail) {
                return res
                    .status(400)
                    .json({ success: false, message: 'El email ya esta registrado' });
            }
            const user = yield (0, user_controller_1.createUser)(req.body);
            res.status(200).json({
                success: true,
                message: 'Cuenta creada exitosamente',
                user,
            });
        }
        catch (error) {
            console.error(error);
        }
    }));
    router.get('/getUsers/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getAllUsers = yield (0, user_controller_1.getListUsers)();
        res.status(200).json(getAllUsers);
    }));
    router.get('/getUserById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const getUsersById = yield (0, user_controller_1.getUserById)(id);
        res.status(200).json(getUsersById);
    }));
    router.get('/getUserByEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email } = req.body;
        const getUsersByEmail = yield (0, user_controller_1.getUserByEmail)(email);
        res.status(200).json(getUsersByEmail);
    }));
    router.patch('/updateUser/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const userUpdated = yield (0, user_controller_1.updateUser)(id, req.body);
        res.status(200).json(userUpdated);
    }));
    router.delete('/deleteUser/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const user = yield (0, user_controller_1.deleteUser)(id);
        res.status(200).json({ delted: true });
    }));
};
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=Users.routes.js.map