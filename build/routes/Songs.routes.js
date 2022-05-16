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
exports.SongRoutes = void 0;
const express_1 = require("express");
const song_controller_1 = require("../controller/song.controller");
const SongRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/songs', router);
    router.post('/createSong', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const song = yield (0, song_controller_1.createSong)(req.body);
        res.status(201).json(song);
    }));
    router.get('/getSongs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getAllSongs = yield (0, song_controller_1.getListSongs)();
        res.status(200).json(getAllSongs);
    }));
    router.get('/getSongById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const songById = yield (0, song_controller_1.getSongById)(id);
        res.status(200).json(songById);
    }));
    router.patch('/updateSong:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const updatedSong = yield (0, song_controller_1.updateSong)(id, req.body);
        res.status(200).json(updatedSong);
    }));
    router.delete('/deleteSong:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const deletedSong = yield (0, song_controller_1.deleteSong)(id);
        res.status(200).json(deletedSong);
    }));
};
exports.SongRoutes = SongRoutes;
//# sourceMappingURL=Songs.routes.js.map