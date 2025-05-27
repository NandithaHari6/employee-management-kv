import {Request,Response,NextFunction} from 'express'
import { EmployeeRole } from '../entities/employee.entity'
import HttpException from '../exception/httpException'
// export const authorizationMiddleware=(req:Request,res:Response,next:NextFunction)=>{
//     const role=req.user?.role
//     if(role!== EmployeeRole.HR){
//             throw new HttpException(403, "User has no privilage to access")
//     }
//     next();
// }

export default function checkRole(authorizedRole:EmployeeRole[]){


    return ((req:Request,res:Response,next:NextFunction)=>{
    const role=req.user?.role
    
    if(!authorizedRole.includes(role)){
            throw new HttpException(403, `User with role ${role} has no privilage to access`)
    }
    next();
})
}
