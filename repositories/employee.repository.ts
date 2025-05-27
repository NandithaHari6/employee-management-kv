import { Repository } from "typeorm";
import Employee from "../entities/employee.entity"

class EmployeeRepository{
    constructor(private repository:Repository <Employee>){

    }
    async create(employee:Employee):Promise<Employee>{
        return this.repository.save(employee);
    }
    async findMany():Promise<Employee[]>{
        return this.repository.find({
    relations: {
        address: true,
        department:true
    }
});
    }
    async getByMail(email:string):Promise<Employee>{
        return this.repository.findOneBy({email})
    }
    async findOneById(id:number):Promise<Employee>{
        return this.repository.findOne({
    relations: {
        address: true,
        department:true
    },
    where :{id}
});
    }
    async update(id:number, employee:Employee):Promise<void>{
        await this.repository.save({id,...employee})
    }
    async updateEmpDept(employee:Employee){
        await this.repository.save(employee)
    }
    async delete(id:number):Promise<void>{
        const emp=await this.repository.findOneBy({id})
        console.log(emp)
        await this.repository.remove(emp)
    }

}
export default EmployeeRepository