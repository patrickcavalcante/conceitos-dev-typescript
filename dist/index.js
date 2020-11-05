"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rotas_1 = require("./rotas");
var app = express_1.default();
app.get('/', rotas_1.helloword);
app.listen(3333);
