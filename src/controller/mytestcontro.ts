import express,{Request , Response, NextFunction} from "express"

const test1 = async ( req:Request, res: Response) => {
    return res.status(200).send("test1 OK")
}

const test2 = async (req:Request, res: Response) => {
    return res.status(200).send({test:"OK"})
}

const istest = {test1, test2}

export default istest;