import express,{Request , Response, NextFunction} from "express"
import controll from "../controller"

const router = express.Router();


router.route("/test1").get(controll.testcontroll.test1)
router.route("/test2").get(controll.testcontroll.test2)

export default router