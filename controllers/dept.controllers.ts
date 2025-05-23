import DepartmentService from "../services/department.service"
import {Router,Request, Response,NextFunction} from "express";

export default class DepartmentController{
    constructor(private deptService:DepartmentService,router:Router){
        router.post("/",this.createDepartment.bind(this))
        router.post("/addEmp",this.addEmployeeToDept.bind(this))
        router.get("/",this.getAllDepartment.bind(this))
        router.delete("/:id",this.deleteDepartment.bind(this))
    }
    async createDepartment(req:Request,res:Response){
        const dept_name=req.body.dept_name;
        const dept =await this.deptService.createDepartment(dept_name);
        res.status(201).send(dept);
    }
    async addEmployeeToDept(req:Request,res:Response){
        const emp_id=req.body.emp_id;
        const dept_id=req.body.dept_id;
        const newEmp=await this.deptService.addEmployeeToDepartment(emp_id,dept_id);
        res.status(200).send(newEmp);
        
    }
    async getAllDepartment(req:Request,res:Response){
        const allDepts=await this.deptService.getAllDeparments()
        res.status(200).send(allDepts)
    }
    async deleteDepartment(req:Request,res:Response){
        const id=req.params.id;
        console.log(id)
        await this.deptService.deleteDepartmentById(id)
        res.status(200).send("Deleted department")
    }


}
