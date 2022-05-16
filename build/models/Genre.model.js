"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    description: { type: String, required: true },
});
exports.GenreModel = mongoose_1.model('genres', schema);
//# sourceMappingURL=Genre.model.js.map