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
exports.deleteGenre = exports.updateGenre = exports.getGenreById = exports.getListGenres = exports.createGenre = void 0;
const Genre_model_1 = require("../models/Genre.model");
//CRUD
exports.createGenre = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = yield Genre_model_1.GenreModel.create(data);
    return genre;
});
exports.getListGenres = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllGenre = yield Genre_model_1.GenreModel.find();
    return getAllGenre;
});
exports.getGenreById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const genreById = yield Genre_model_1.GenreModel.findById({ id });
    return genreById;
});
exports.updateGenre = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedGenre = yield Genre_model_1.GenreModel.updateOne({ id }, data);
    return updatedGenre;
});
exports.deleteGenre = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedGenre = yield Genre_model_1.GenreModel.deleteOne({ id });
    return updatedGenre;
});
//# sourceMappingURL=genre.controller.js.map