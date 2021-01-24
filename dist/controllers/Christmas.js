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
exports.Christmas = void 0;
const models_1 = require("../database/models");
const models_2 = __importDefault(require("../database/models"));
const Validation_1 = require("../services/Validation");
class Christmas {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield models_2.default.christmas.create(req.body);
                return res.status(200).json(yield Validation_1.Validation.successResponse(result, false));
            }
            catch (err) {
                return res.status(400).json(yield Validation_1.Validation.errorResponse(err));
            }
        });
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield models_2.default.christmas.findAll();
                return res.status(200).json(yield Validation_1.Validation.successResponse(results, false));
            }
            catch (err) {
                return res.status(400).json(yield Validation_1.Validation.errorResponse(err));
            }
        });
    }
    static getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield models_2.default.christmas.findOne({
                    where: {
                        id: Number(req.params.id)
                    }
                });
                return res.status(200).json(yield Validation_1.Validation.successResponse(result, false));
            }
            catch (err) {
                return res.status(400).json(yield Validation_1.Validation.errorResponse(err));
            }
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield models_1.sequelize.transaction();
            try {
                yield models_2.default.christmas.update(req.body, {
                    where: {
                        id: Number(req.params.id)
                    }
                });
                const result = yield models_2.default.christmas.findOne({
                    where: {
                        id: Number(req.params.id)
                    }
                });
                yield transaction.commit();
                return res.status(200).json(yield Validation_1.Validation.successResponse(result, false));
            }
            catch (err) {
                yield transaction.rollback();
                return res.status(400).json(yield Validation_1.Validation.errorResponse(err));
            }
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield models_2.default.christmas.destroy({
                    where: {
                        id: Number(req.params.id)
                    }
                });
                return res.status(200).json(yield Validation_1.Validation.successResponse(result, true));
            }
            catch (err) {
                return res.status(400).json(yield Validation_1.Validation.errorResponse(err));
            }
        });
    }
}
exports.Christmas = Christmas;
