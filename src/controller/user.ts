import express,{Request , Response, NextFunction} from "express"
import { Users } from "../models/users";

const allUserGet = async ( req:Request, res: Response) => {
    try {
        const data = await Users.findAll();
        return res.status(200).send(data);
    } catch (error) {
        return res.status(400).send({msg:"유저 불러오기 오류 관리자 문의바람", error})
    }
}

const postUser = async (req:Request, res: Response) => {
    const { userName, userDesc } = req.body;
    let { hasCat } = req.body;
    if(!userName){
        return res.status(400).send({msg:"유저 이름이 없음"});
    }
    if(!userDesc){
        return res.status(400).send({msg:"유저 설명이 없음"});
    }
    if(hasCat == null){
        hasCat = false;
    }
    try {
        const data = await Users.create({ userName, userDesc, hasCat })
        return res.status(200).send({msg:"유저 생성 완료", 유저:data.userName});
    } catch (error) {
        return res.status(400).send({msg:"유저 생성 오류 관리자 문의바람", error})
    }
}
//고양이 존재여부
const exUserCat = async (req:Request, res: Response) => {
    let index: number = Number(req.params.userIndex as String)
    try {
        const exUser = await Users.findByPk(index)
        if(exUser){
            return res.status(200).send({유저:exUser.userName, index:exUser.index ,고양이: exUser.hasCat?"고양이대리고있어!":"고양이없어요!"})
        }else{
            return res.status(200).send({유저:"유저가없습니다.", 고양이:"유저가 없습니다."})
        }
    } catch (error) {
        return res.status(400).send({msg:"유저 불러오기 오류 관리자 문의바람", error})
    }
}
//고양이 수정
const UserCatPost =async (req:Request, res: Response) => {
    let index: number = Number(req.params.userIndex as String)
    
    try {
        const exUser = await Users.findByPk(index)
        if(exUser){
            const upUser = await exUser.update({hasCat:!exUser.hasCat})
            return res.status(200).send({유저:exUser.userName, index:exUser.index ,고양이: upUser.hasCat?"고양이대리고있어!로 수정!":"고양이없어요!로 수정!"})
        }else{
            return res.status(200).send({유저:"유저가없습니다.", 고양이:"유저가 없습니다."})
        }
    } catch (error) {
        return res.status(400).send({msg:"유저 불러오기 오류 관리자 문의바람", error})
    }
}
//유저 삭제
const delUser = async (req:Request, res: Response) => {
    let index: number = Number(req.params.userIndex as String)
    try {
        const exUser = await Users.findByPk(index)
        if(exUser){
            exUser.destroy();
            return res.status(200).send({msg:"유저 삭제완료"});
        }else{
            return res.status(200).send({유저:"유저가 없거나 이미 삭제된 유저입니다."})
        }
    } catch (error) {
        return res.status(400).send({msg:"알수없는 오류", error})
    }
}
const istest = {allUserGet, postUser, exUserCat, UserCatPost, delUser}

export default istest;