import { JwtPayLoad } from "../dto/jwt.payload";
import HttpException from "../exception/httpException";
import { JWT_SECRET, JWT_VALIDITY } from "../utils/constants";
import EmployeeService from "./employee.services";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export class AuthService{
    constructor(private employeeService:EmployeeService) {

    }
    async login(email:string,password:string){
        const employee=await this.employeeService.getEmployeeByEmail(email)
        console.log(employee)
        if(!employee){
            throw new HttpException(404,"NO user with this mail id")
        }
        const isPasswordValid= await bcrypt.compare(password,employee.password)
        if(!isPasswordValid){
            throw new HttpException(400,"Password Invalid")
        }
        const payload:JwtPayLoad={
        id:employee.id,
        email:employee.email,
        role:employee.role
    }
    const token=jwt.sign(payload,JWT_SECRET,{expiresIn:JWT_VALIDITY})
    return {
        "tokenType":"Bearer",
        "token":token
    }

    }   
   
}