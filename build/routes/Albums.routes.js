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
exports.AlbumRoute = void 0;
const express_1 = require("express");
const album_controller_1 = require("../controller/album.controller");
exports.AlbumRoute = (app) => {
    const router = express_1.Router();
    app.use('/albums', router);
    router.post('/createAlbum', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const album = yield album_controller_1.createAlbum(req.body);
        res.status(201).json(album);
    }));
    router.get('/getAlbums/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getAllAlbums = yield album_controller_1.getListAlbums();
        res.status(200).json(getAllAlbums);
    }));
    router.get('/getAlbumById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const AlbumById = album_controller_1.getAlbumById(id);
        res.status(200).json(AlbumById);
    }));
    router.patch('/updateAlbum/:id', (req, res) => {
        const { id } = req.params;
        const updatedAlbum = album_controller_1.updateAlbum(id, req.body);
        res.status(200).json(updatedAlbum);
        router.delete('/deleteAlbum/:id', (req, res) => {
            const { id } = req.params;
            const deletedAlbum = album_controller_1.deleteAlbum(id);
            res.status(200).json(deletedAlbum);
        });
    });
};
//# sourceMappingURL=Albums.routes.js.map