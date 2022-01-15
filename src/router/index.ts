import express,{Request , Response, NextFunction} from "express"
import testrouter from "./mytestrouter";

const router = express.Router();

router.use("/", testrouter);


export default router