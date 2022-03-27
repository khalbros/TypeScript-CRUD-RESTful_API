"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const app_1 = __importDefault(require("./app"));
const server = http_1.default.createServer(app_1.default);
mongoose_1.default
    .connect(config_1.DB_URL)
    .then(() => {
    console.log(`DataBase Connected`);
    startServer();
})
    .catch((err) => {
    console.error(err);
});
function startServer() {
    server.listen(config_1.PORT, () => {
        console.log(`Server Running On PORT:${config_1.PORT}`);
    });
}
