"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingerModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    stageName: { type: String, required: true },
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    nationality: { type: String, required: true },
    image: { type: String, required: true },
});
exports.SingerModel = mongoose_1.model('singers', schema);
//# sourceMappingURL=Singer.model.js.map