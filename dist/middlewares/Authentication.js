"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const models_1 = __importDefault(require("../database/models"));
const passport_1 = __importDefault(require("passport"));
const passport_http_bearer_1 = __importDefault(require("passport-http-bearer"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_json_1 = __importDefault(require("../config/auth.json"));
class Authentication {
    constructor() {
        passport_1.default.use(new passport_http_bearer_1.default((token, done) => __awaiter(this, void 0, void 0, function* () {
            try {
                let payload = jsonwebtoken_1.default.verify(token, auth_json_1.default.secret);
                let user = yield models_1.default.users.findOne({
                    where: {
                        id: Number(payload.id)
                    }
                });
                done(null, user);
            }
            catch (err) {
                console.log(err.message);
                done(err);
            }
        })));
    }
    token(req, res, next) {
        passport_1.default.authenticate('bearer', { session: false }, (err, user, info) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                return res.status(401).json({ 'Mensagem': 'Token expirado ou inválido!' });
            }
            return next();
        }))(req, res, next);
    }
}
exports.Authentication = Authentication;
