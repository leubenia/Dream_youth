import express,{Request , Response, NextFunction} from "express"
import controll from "../controller"

const router = express.Router();


router.route("/").get(controll.usercontroll.allUserGet).post(controll.usercontroll.postUser);
router.route("/:userIndex/hasCat").get(controll.usercontroll.exUserCat).post(controll.usercontroll.UserCatPost);
router.route("/:userIndex").delete(controll.usercontroll.delUser);

export default router