'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const app_1 = __importDefault(require('../src/app'));
const { dbConnection } = require('./database/config');
dbConnection();
app_1.default.listen(
  'mongodb+srv://rockstar:yzlGGYAS8kLMUD5x@cluster0.cqcab.mongodb.net/music',
  () => {
    return console.log(
      `server is listening on ${'mongodb+srv://rockstar:yzlGGYAS8kLMUD5x@cluster0.cqcab.mongodb.net/music'}`
    );
  }
);
//# sourceMappingURL=index.js.map
