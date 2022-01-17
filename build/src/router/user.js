"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("../controller"));
const router = express_1.default.Router();
router.route("/").get(controller_1.default.usercontroll.allUserGet).post(controller_1.default.usercontroll.postUser);
router.route("/:userIndex/hasCat").get(controller_1.default.usercontroll.exUserCat).post(controller_1.default.usercontroll.UserCatPost);
router.route("/:userIndex").delete(controller_1.default.usercontroll.delUser);
exports.default = router;
//# sourceMappingURL=user.js.map