import HttpException from "../exception/httpException";
import EmployeeService from "../services/employee.services";
import {Router,Request, Response,NextFunction} from "express";
import bcrypt from 'bcrypt';
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { CreateEmployeeDto } from "../dto/employee.dto";
import { UpdateEmployeeDto } from "../dto/update.dto";
import checkRole from "../middlewares/authorization.middleware";
// import checkRole, { authorizationMiddleware } from "../middlewares/authorization.middleware";


class EmployeeController{
  
    constructor(private employeeService:EmployeeService,private router:Router){

        router.get("/",this.getAllEmployees.bind(this));
        router.post("/",checkRole("HR"), this.createEmployee.bind(this));
        router.put("/:id",checkRole("HR"),this.updateEmployee.bind(this));
        router.delete("/:id",checkRole("HR"),this.deleteEmployee.bind(this));
        router.get("/:id",this.getEmployeeById.bind(this));
    }
    async createEmployee(req:Request, res:Response,next:NextFunction){
        try {
      const createEmployeeDto = plainToInstance(CreateEmployeeDto, req.body);
      const errors = await validate(createEmployeeDto);
      if (errors.length > 0) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }
      const hashedPassword=await bcrypt.hash(createEmployeeDto.password,10);
      const savedEmployee = await this.employeeService.createEmployee(
        createEmployeeDto.employeeId,
        createEmployeeDto.dateOfJoining,
        createEmployeeDto.experience,
        createEmployeeDto.status,
        createEmployeeDto.dept_id,
        createEmployeeDto.email,
        createEmployeeDto.name,
        createEmployeeDto.age,
        createEmployeeDto.address,
        hashedPassword,
        createEmployeeDto.role
        
         
      );
      res.status(201).send(savedEmployee);
    } catch (error) {
      next(error);
    }
    //   try{  const name=req.body.name;
    //     const email=req.body.email;
    //     if(!isEmail(email)){
    //         throw new  HttpException(412,"Enter a valid email")
    //     }
    //     const age=req.body.age;
    //     const address=req.body.address;
    //     const emp=await this.employeeService.createEmployee(name,email,age,address)
    //     res.status(201).send(emp);}
    //     catch(err){
    //         console.log(err);
    //         next(err)
    //     }
    }
    async getAllEmployees(req:Request,res:Response,next:NextFunction){
      
        try{const employees=await this.employeeService.getAllEmployees();
        if(employees.length === 0){
            throw new HttpException(404,"No employees to display")
        }
        res.status(200).send(employees)}catch(err){
          next(err)
        }
    }
    async getEmployeeById(req:Request,res:Response,next:NextFunction){
     try{   const id=Number(req.params.id);
        const emp=await this.employeeService.getEmployeeById(id)
        if(!emp){
            throw new HttpException(404,"No employee wuth this id")
        } 
        res.status(200).send(emp);
    }catch(err){
        console.log("Error",err);
        next(err);
    }}

    async updateEmployee(req:Request,res:Response,next:NextFunction){
         const id=Number(req.params.id);
          try {
      const createEmployeeDto = plainToInstance(UpdateEmployeeDto, req.body);
      const errors = await validate(createEmployeeDto);
      if (errors.length > 0) {
        console.log(JSON.stringify(errors));
        throw new HttpException(400, JSON.stringify(errors));
      }
      await this.employeeService.updateEmployee(
        id,
        createEmployeeDto.email,
        createEmployeeDto.name,
      
        createEmployeeDto.address,
        createEmployeeDto.age
       
      );
      res.status(201).send();
    } catch (error) {
      next(error);
    }
    //          const name=req.body.name;
    //     const email=req.body.email;
        
    //     await this.employeeService.updateEmployee(id,email,name,req.body.address,req.body.age);
    //     res.status(200).send("Updated")
    }
    async deleteEmployee(req:Request,res:Response,next:NextFunction){
        const id=Number(req.params.id);
        try{
          await this.employeeService.deleteEmployee(id);
          res.status(200).send("Deleted");
        }
        catch(err){
          next(err)
        }
        
    }
}
export default EmployeeController;