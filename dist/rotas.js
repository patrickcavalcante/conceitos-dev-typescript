"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloword = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloword(request, response) {
    var user = CreateUser_1.default({
        name: 'patrick cavalcante',
        email: 'patrickc.lima2@gmail.com',
        password: '123456',
        techs: ['node js', { title: 'javascript', experience: 100 }]
    });
    return response.json({ message: user });
}
exports.helloword = helloword;
