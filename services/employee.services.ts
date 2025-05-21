import Employee from "../entities/employee.entity";
import Address from "../entities/address.entitiy";
import EmployeeRepository from "../repositories/employee.repository";
import { CreateAddressDto } from "../dto/address.dto";
class EmployeeService{
    constructor(private emmployeeRepository:EmployeeRepository){}
    async createEmployee(email:string,name:string,age:number,address:CreateAddressDto):Promise<Employee>{
        const newEmp=new Employee();
        newEmp.name=name;
        newEmp.email=email;
        newEmp.age=age;
        const addressObj=new Address()
        addressObj.line1=address.line1;
        addressObj.pincode=address.pincode
        newEmp.address=addressObj;
        return this.emmployeeRepository.create(newEmp)

    }
    async getAllEmployees():Promise<Employee[]>{
        return this.emmployeeRepository.findMany();
    }
    async getEmployeeById(id:number):Promise<Employee>{
        return this.emmployeeRepository.findOneById(id);
    }
    async updateEmployee(id:number,email:string,name:string){
        const exsistingEmployee=await this.emmployeeRepository.findOneById(id);
        if(exsistingEmployee){
            const employee=new Employee();
            employee.name=name;
            employee.email=email;
            await this.emmployeeRepository.update(id,employee);
        }
    }
    async deleteEmployee(id:number){
        const exsistingEmployee=await this.emmployeeRepository.findOneById(id);
        if(exsistingEmployee){

        
            await this.emmployeeRepository.delete(id);
        }
    } 
    
}
export default EmployeeService