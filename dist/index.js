"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = __importDefault(require("./config/route"));
const app = route_1.default();
app.listen(process.env.PORT || 3000, () => console.log('servidor rodando'));
