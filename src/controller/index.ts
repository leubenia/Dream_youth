import express,{Request , Response, NextFunction} from "express"
import testcontroll from "./mytestcontro";
import usercontroll from "./user";

const index = {testcontroll, usercontroll}

export default index;
