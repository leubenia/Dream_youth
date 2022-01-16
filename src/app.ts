import express,{Request , Response, NextFunction} from "express"
import * as dotenv from "dotenv";
dotenv.config();
import * as path from "path";
import cookieParser from "cookie-parser"
import morgan from "morgan";
import isRouter from "./router";
const app = express();

app.use((req:Request, res:Response, next:NextFunction) => {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});
app.use(express.json())
app.use(cookieParser(process.env.SECRET_KEY));

app.use(morgan("common"));

app.use("", isRouter);

app.route("/_ah/health").get((req:Request, res:Response)=>{
    res.sendStatus(200)
})
app.use((req:Request, res:Response, next:NextFunction)=>{
    const error =  new Error(`${req.method} ${req.url} 라우터 없음..!`);
    next(error)
})
app.use((err:Error, req:Request, res: Response, next:NextFunction) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.send(err.message);
});


export = { app }
