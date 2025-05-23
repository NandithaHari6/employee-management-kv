import Department from "../entities/department.entity";
import { DepartmentRepository } from "../repositories/department.repository";
import EmployeeRepository from "../repositories/employee.repository";
import { LoggerService } from "./logger.service";

export default class DepartmentService{
    private logger=LoggerService.getInstance(DepartmentService.name)
    constructor(private departmentRepository:DepartmentRepository, private employeeRepository:EmployeeRepository){}
    async createDepartment(dept_name:string){
        const dept=new Department;
        dept.dept_name=dept_name;
        return this.departmentRepository.create(dept)
    }
    async addEmployeeToDepartment(emp_id:number,dept_id){
        const emp=await this.employeeRepository.findOneById(emp_id);
        emp.department=dept_id;
        
        this.logger.info(`Adding employee with id ${emp_id} to department ${dept_id}` )
        return this.employeeRepository.updateEmpDept(emp);
    }
    async getAllDeparments(){
        return this.departmentRepository.findDepts();
    }
    async deleteDepartmentById(id:number){
        const existingid=await this.departmentRepository.findOne(id)
      
        if (existingid){
         
            await this.departmentRepository.delete(id);
        }

    }

}