"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const models_1 = __importDefault(require("./models"));
const httpServer = http_1.default.createServer(app_1.default.app);
const Mytest = httpServer.listen(process.env.EXPRESS_PORT, async () => {
    console.log(`3000 or ${process.env.EXPRESS_PORT}`);
    // //sequelize-db 연결 테스트
    await models_1.default.authenticate()
        .then(async () => {
        console.log("연결 되었습니다.");
    })
        .catch((e) => {
        console.log('TT : ', e);
    });
});
//# sourceMappingURL=server.js.map