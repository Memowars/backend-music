"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    singerID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'singers', required: true },
    releaseDate: { type: Date, required: true, default: new Date() },
    albumID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'albums', optional: true },
    duration: { type: Number, required: true },
    completeFile: { type: String, required: true },
    previewFile: { type: String, required: true },
    price: { type: Number, optional: true },
});
exports.SongModel = (0, mongoose_1.model)('songs', schema);
//# sourceMappingURL=Song.model.js.map