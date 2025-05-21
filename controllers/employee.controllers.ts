import HttpException from "../exception/httpException";
import EmployeeService from "../services/employee.services";
import {Router,Request, Response,NextFunction} from "express";
import { isEmail } from "../validators/email";
import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { CreateEmployeeDto } from "../dto/employee.dto";


class EmployeeController{
    constructor(private employeeService:EmployeeService,private router:Router){
        router.get("/",this.getAllEmployees.bind(this));
        router.post("/",this.createEmployee.bind(this));
        router.put("/:id",this.updateEmployee.bind(this));
        router.delete("/:id",this.deleteEmployee.bind(this));
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
      const savedEmployee = await this.employeeService.createEmployee(
        createEmployeeDto.email,
        createEmployeeDto.name,
        createEmployeeDto.age,
        createEmployeeDto.address
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
    async getAllEmployees(req:Request,res:Response){
        const employees=await this.employeeService.getAllEmployees();
        res.status(200).send(employees)
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

    async updateEmployee(req:Request,res:Response){
         const id=Number(req.params.id);
             const name=req.body.name;
        const email=req.body.email;
        await this.employeeService.updateEmployee(id,email,name);
        res.status(200).send("Updated")
    }
    async deleteEmployee(req:Request,res:Response){
        const id=Number(req.params.id);
        await this.employeeService.deleteEmployee(id);
    }
}
export default EmployeeController;