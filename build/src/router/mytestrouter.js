"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller"));
const router = express_1.default.Router();
router.route("/test1").get(controller_1.default.testcontroll.test1);
router.route("/test2").get(controller_1.default.testcontroll.test2);
exports.default = router;
//# sourceMappingURL=mytestrouter.js.map