"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_URL = void 0;
require("dotenv/config");
exports.DB_URL = process.env.DB_URL || "";
exports.PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
