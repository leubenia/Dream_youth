"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const sequelzie = new sequelize_1.Sequelize(config_1.default.development.database, config_1.default.development.username, config_1.default.development.password, {
    host: config_1.default.development.host,
    dialect: "mysql",
    timezone: "+09:00",
    pool: {
        max: 10,
        min: 0,
        acquire: 5000,
        idle: 10000,
    },
    dialectOptions: {
        supportBigNumbers: true,
        bigNumberStrings: true,
    },
    define: {
        underscored: true,
    },
});
exports.default = sequelzie;
//# sourceMappingURL=index.js.map