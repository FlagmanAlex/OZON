"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const clientRoute_1 = __importDefault(require("./routes/clientRoute"));
const BD_TOKEN = process.env.BD_TOKEN;
const BD_NAME = process.env.BD_NAME;
const port = 3000;
const app = (0, express_1.default)();
if (BD_TOKEN) {
    mongoose_1.default.connect(BD_TOKEN, { dbName: BD_NAME });
    mongoose_1.default.connection.on('connected', () => console.log('Соединение с MongoDB успешно установлено.'));
    mongoose_1.default.connection.on('error', (err) => console.error('Ошибка подключения к MongoDB:', err));
    mongoose_1.default.connection.on('disconnected', () => console.log('Соединение с MongoDB закрыто.'));
}
else
    console.error('BD_TOKEN не указан в файле .env');
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/client', clientRoute_1.default);
app.listen(port, () => console.log(`Сервер запущен на ${port} порту`));
