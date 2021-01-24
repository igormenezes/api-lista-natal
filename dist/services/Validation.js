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
exports.Validation = void 0;
const moment_1 = __importDefault(require("moment"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_json_1 = __importDefault(require("../config/auth.json"));
class Validation {
    static generateToken(res) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                'token': jsonwebtoken_1.default.sign({ id: res.id }, auth_json_1.default.secret, { expiresIn: 300 })
            };
        });
    }
    static successResponse(res, defaultMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            if (defaultMessage) {
                return {
                    'Mensagem': 'Operação realizada com sucesso.'
                };
            }
            if (typeof res.length !== "undefined") {
                let response = {};
                Object.keys(res).forEach((item) => {
                    response[item] = {
                        'ID': res[item].id,
                        'Título': res[item].title,
                        'Descrição': res[item].description,
                        'Data de criação': moment_1.default(res[item].createdAt).format('DD/MM/YYYY HH:mm:ss'),
                        'Data de atualização': moment_1.default(res[item].updatedAt).format('DD/MM/YYYY HH:mm:ss'),
                        'Mensagem': 'Operação realizada com sucesso.'
                    };
                });
                return response;
            }
            return {
                'ID': res.id,
                'Título': res.title,
                'Descrição': res.description,
                'Data de criação': moment_1.default(res.createdAt).format('DD/MM/YYYY HH:mm:ss'),
                'Data de atualização': moment_1.default(res.updatedAt).format('DD/MM/YYYY HH:mm:ss'),
                'Mensagem': 'Operação realizada com sucesso.'
            };
        });
    }
    static errorResponse(res) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                'Mensagem': "Ocorreu um erro ao realizar a operação, tente novamente mais tarde. Verifique os dados informados na sua requisição."
            };
        });
    }
}
exports.Validation = Validation;
exports.default = Validation;
