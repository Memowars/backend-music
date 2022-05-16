"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const { dbConnection } = require('./database/config');
require('dotenv').config();
dbConnection();
var port = process.env.PORT || 3000;
app_1.default.listen(port, function () {
    console.log('App is running on port ' + port);
});
//# sourceMappingURL=index.js.map