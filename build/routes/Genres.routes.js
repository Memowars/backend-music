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
exports.GenreRoutes = void 0;
const express_1 = require("express");
const genre_controller_1 = require("../controller/genre.controller");
const GenreRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/genres', router);
    router.post('/createGenre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const genre = yield (0, genre_controller_1.createGenre)(req.body);
        res.status(201).json(genre);
    }));
    router.get('/getGenres/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getAllGenres = yield (0, genre_controller_1.getListGenres)();
        res.status(200).json(getAllGenres);
    }));
    router.get('/getGenreById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const genreById = (0, genre_controller_1.getGenreById)(id);
        res.status(200).json(genreById);
    }));
    router.patch('/updateGenre/:id', (req, res) => {
        const { id } = req.params;
        const updatedGenre = (0, genre_controller_1.updateGenre)(id, req.body);
        res.status(200).json(updatedGenre);
        router.delete('/deleteGenre/:id', (req, res) => {
            const { id } = req.params;
            const deletedGenre = (0, genre_controller_1.deleteGenre)(id);
            res.status(200).json(deletedGenre);
        });
    });
};
exports.GenreRoutes = GenreRoutes;
//# sourceMappingURL=Genres.routes.js.map