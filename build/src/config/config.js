"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    "development": {
        "username": process.env.DB_USERS || 'root',
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME || 'test',
        "host": process.env.DB_END_POINT || 'localhost',
        "dialect": "mysql",
        "logging": false
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
};
exports.default = config;
//# sourceMappingURL=config.js.map