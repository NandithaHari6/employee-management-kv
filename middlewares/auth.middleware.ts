
import {Request,Response,NextFunction} from 'express'
import HttpException from '../exception/httpException';
import jwt from "jsonwebtoken"
import { JWT_SECRET } from '../utils/constants';
import { JwtPayLoad } from '../dto/jwt.payload';
const getToken=(req:Request)=>{
    const token=req.headers.authorization;
    if(!token)
        throw new HttpException(401,"Not authorized as no token")
    const tokenSplits=token.split(" ")
    if(tokenSplits.length!=2){
        throw new HttpException(401,"Invalid Token as format is incorrect")
    }
    return tokenSplits[1]

}
export const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const token=getToken(req);
    if(!token){
        throw new HttpException(401,"Not authorized as no token passed")
    }
    try{
        const payload=jwt.verify(token, JWT_SECRET) as JwtPayLoad;
        req.user=payload;
       
    }catch{
        throw new HttpException(401,"Invalid or expired token")
    }
    
    next();
}