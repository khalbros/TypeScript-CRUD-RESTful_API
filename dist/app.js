"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const route_1 = __importDefault(require("./routes/Authors/route"));
const route_2 = __importDefault(require("./routes/Books/route"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, morgan_1.default)("combined"));
app.get("/", (req, res) => {
    res.send("Hello Express TypeScript");
});
app.use("/authors", route_1.default);
app.use("/books", route_2.default);
exports.default = app;
