"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: String, required: true },
    singerID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'singers', required: true },
    releaseDate: { type: Date, required: true, default: new Date() },
    songsID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'songs' },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 100 },
    genreID: { type: mongoose_1.Schema.Types.ObjectId, ref: 'genres', required: true },
    image: { type: String, required: true },
});
exports.AlbumModel = (0, mongoose_1.model)('albums', schema);
//# sourceMappingURL=Album.model.js.map