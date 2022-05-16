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
exports.SingerRoute = void 0;
const express_1 = require("express");
const singer_controller_1 = require("../controller/singer.controller");
const SingerRoute = (app) => {
    const router = (0, express_1.Router)();
    app.use('/singers', router);
    router.post('/createSinger', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const singer = yield (0, singer_controller_1.createSinger)(req.body);
        res.status(201).json(singer);
    }));
    router.get('/getSingers/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getAllSinger = yield (0, singer_controller_1.getListSingers)();
        res.status(200).json(getAllSinger);
    }));
    router.get('/getSingerById/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const singerById = yield (0, singer_controller_1.getSingerById)(id);
            res.status(200).json(singerById);
        }
        catch (error) {
            console.error(error);
        }
    }));
    router.patch('/updateSinger/:id', (req, res) => {
        const { id } = req.params;
        const updatedSinger = (0, singer_controller_1.updateSinger)(id, req.body);
        res.status(200).json(updatedSinger);
        router.delete('/deleteSinger/:id', (req, res) => {
            const { id } = req.params;
            const deletedSinger = (0, singer_controller_1.deleteSinger)(id);
            res.status(200).json(deletedSinger);
        });
    });
};
exports.SingerRoute = SingerRoute;
//# sourceMappingURL=Singers.routes.js.map