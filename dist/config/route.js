"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const consign_1 = __importDefault(require("consign"));
const body_parser_1 = __importDefault(require("body-parser"));
module.exports = () => {
    const app = express_1.default();
    const fileExtension = __filename.split('.')[1];
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
    if (fileExtension == 'ts') {
        consign_1.default().include('./src/routes').into(app);
    }
    else {
        consign_1.default().include('./dist/routes').into(app);
    }
    return app;
};
