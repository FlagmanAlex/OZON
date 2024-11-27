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
exports.deleteClient = exports.insertClient = exports.getClient = exports.getClients = void 0;
const client_model_1 = __importDefault(require("../models/client.model"));
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield client_model_1.default.find();
        console.log(clients);
        res.status(200).json(clients);
    }
    catch (error) {
        console.log('Ошибка базы данных', error);
    }
});
exports.getClients = getClients;
const getClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientId = req.params.id;
        const client = yield client_model_1.default.findById(clientId);
        if (!client)
            res.status(404).json({ message: 'Клиент не найден' });
        else
            res.status(200).json(client);
    }
    catch (error) {
        console.log('Ошибка базы данных', error);
        res.status(500).json({ message: 'Ошибка сервера. попробуйте позже' });
    }
});
exports.getClient = getClient;
const insertClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log('Ошибка базы данных', error);
        res.status(500).json({ message: 'Ошибка сервера. попробуйте позже' });
    }
});
exports.insertClient = insertClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (error) {
        console.log('Ошибка базы данных', error);
        res.status(500).json({ message: 'Ошибка сервера. попробуйте позже' });
    }
});
exports.deleteClient = deleteClient;
