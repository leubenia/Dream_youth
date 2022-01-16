import express,{Request , Response, NextFunction} from "express"
import testrouter from "./mytestrouter";
import userrouter from "./user"

const router = express.Router();

router.use("/", testrouter);
router.use("/user", userrouter);


export default router