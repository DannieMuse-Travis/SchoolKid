import {Request,Response} from "express"
import Kidmodel from "../model/Kidmodel"
import { statusCode } from "../config/StatusCode"

export const createKids = async (req:Request,res:Response)=>{
    try {
        const {name,image} = req.body

        const kids = await Kidmodel.create({
            name,
            image,
        })
         return res.status(statusCode.created).json({
            message:"created",
            data:kids
         })
    } catch (error) {
        return res.status(statusCode.bad_Request).json({
            message:"Error",
        })
    }
}

export const viewKids = async (req:Request,res:Response)=>{
    try {
       const kids = await  Kidmodel.find()
       
       return res.status(statusCode.ok).json({
         message:"read",
         data:kids
       })
    } catch (error) {
        return res.status(statusCode.bad_Request).json({
            message:"error"
        })
    }
}

export const  viewSortedkids = async(req:Request,res:Response)=>{
    try {
        const kids = await Kidmodel.find().sort({name:1})

        return res.send(statusCode.ok).json({
            message:"read sorted",
            data:kids
        })
    } catch (error) {
         return res.status(statusCode.bad_Request).json({
            message:"error"
         })
    }
}