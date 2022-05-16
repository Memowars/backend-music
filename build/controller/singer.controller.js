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
exports.deleteSinger = exports.updateSinger = exports.getSingerById = exports.getListSingers = exports.createSinger = void 0;
const Singer_model_1 = require("../models/Singer.model");
//CRUD
const createSinger = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const singer = yield Singer_model_1.SingerModel.create(data);
    return singer;
});
exports.createSinger = createSinger;
const getListSingers = () => __awaiter(void 0, void 0, void 0, function* () {
    const getAllSingers = yield Singer_model_1.SingerModel.find();
    return getAllSingers;
});
exports.getListSingers = getListSingers;
const getSingerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singerById = yield Singer_model_1.SingerModel.findById(id);
    return singerById;
});
exports.getSingerById = getSingerById;
const updateSinger = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedSinger = yield Singer_model_1.SingerModel.updateOne({ id }, data);
    return updatedSinger;
});
exports.updateSinger = updateSinger;
const deleteSinger = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedSinger = yield Singer_model_1.SingerModel.deleteOne({ id });
    return deletedSinger;
});
exports.deleteSinger = deleteSinger;
//# sourceMappingURL=singer.controller.js.map