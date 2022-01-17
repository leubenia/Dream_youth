"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    index: {
        type: sequelize_1.DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: false
    },
    userDesc: {
        type: sequelize_1.DataTypes.TEXT,
    },
    hasCat: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    sequelize: index_1.default,
    modelName: "User",
});
//# sourceMappingURL=users.js.map