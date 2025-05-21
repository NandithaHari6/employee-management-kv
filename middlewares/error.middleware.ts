import {Request,Response,NextFunction} from 'express'
import HttpException from '../exception/httpException'
export const errorHandler=(error:Error,req:Request,res:Response,next:NextFunction)=>{
    try{
        if (error instanceof HttpException){
            const status:number=error.status ||500;
            const message:string=error.message || "Something went wrong";
            let respBody={ message:message}
            res.status(status).json(respBody)
        }else{
 console.log(error.stack)
        res.status(500).send({error:error.message})
        }
       
    }catch(err){

    next(err)

    }
}