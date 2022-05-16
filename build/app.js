"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const Users_routes_1 = require("./routes/Users.routes");
const Songs_routes_1 = require("./routes/Songs.routes");
const Genres_routes_1 = require("./routes/Genres.routes");
const Albums_routes_1 = require("./routes/Albums.routes");
const Singers_routes_1 = require("./routes/Singers.routes");
const Auth_routes_1 = require("./routes/Auth.routes");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
app.use(cors_1.default({
    origin: '*',
}));
Users_routes_1.UserRoutes(app);
Genres_routes_1.GenreRoutes(app);
Songs_routes_1.SongRoutes(app);
Albums_routes_1.AlbumRoute(app);
Singers_routes_1.SingerRoute(app);
Auth_routes_1.AuthRoute(app);
exports.default = app;
//# sourceMappingURL=app.js.map