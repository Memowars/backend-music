"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const IUser_1 = require("../Interfaces/IUser");
const schema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: {
        type: String,
        required: true,
        default: IUser_1.ERoles.CUSTUMER,
        enum: IUser_1.ERoles,
    },
});
exports.UserModel = (0, mongoose_1.model)('users', schema);
//# sourceMappingURL=Users.model.js.map