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
exports.deleteAlbum = exports.updateAlbum = exports.getAlbumById = exports.getListAlbums = exports.createAlbum = void 0;
const Album_model_1 = require("../models/Album.model");
//CRUD
exports.createAlbum = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const album = yield Album_model_1.AlbumModel.create(data);
    return album;
});
exports.getListAlbums = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllalbums = yield Album_model_1.AlbumModel.find();
    return getAllalbums;
});
exports.getAlbumById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const albumById = yield Album_model_1.AlbumModel.findById({ id });
    return albumById;
});
exports.updateAlbum = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const albumUpdated = yield Album_model_1.AlbumModel.updateOne({ id }, data);
    return albumUpdated;
});
exports.deleteAlbum = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAlbum = yield Album_model_1.AlbumModel.deleteOne({ id });
    return deletedAlbum;
});
//# sourceMappingURL=album.controller.js.map