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
exports.deleteSong = exports.updateSong = exports.getSongById = exports.getListSongs = exports.createSong = void 0;
const Song_model_1 = require("../models/Song.model");
//CRUD
const createSong = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const song = yield Song_model_1.SongModel.create(data);
    return song;
});
exports.createSong = createSong;
const getListSongs = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllSong = yield Song_model_1.SongModel.find()
        .populate('singerID')
        .populate('albumID');
    return getAllSong;
});
exports.getListSongs = getListSongs;
const getSongById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const getSongById = yield Song_model_1.SongModel.findById(id);
    return getSongById;
});
exports.getSongById = getSongById;
const updateSong = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedSong = yield Song_model_1.SongModel.updateOne({ id }, data);
    return updatedSong;
});
exports.updateSong = updateSong;
const deleteSong = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedSong = yield Song_model_1.SongModel.deleteOne({ id });
    return deletedSong;
});
exports.deleteSong = deleteSong;
//# sourceMappingURL=song.controller.js.map