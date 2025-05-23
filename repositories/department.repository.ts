import { Repository } from "typeorm";
import Department from "../entities/department.entity";
export class DepartmentRepository{
    constructor(private repository:Repository<Department>){

    }
    async create(department:Department):Promise<Department>{
        return this.repository.save(department)
    }
    async findDepartmentId(dept_name:string){
        return this.repository.findOneBy({dept_name})
    }
    async listEmployees(id):Promise<Department[]>{
        return this.repository.find({where:id, 
            relations:{
                employee:true
            }
        })
   
    }
    async findOne(id){
        return this.repository.findOneBy({id})
    }
    async findDepts(){
            return this.repository.find({
                relations:{
                    employee:true
                }
            })
        }
    async delete(id:number){
            // const dept=await this.repository.findOneBy({id})

            await this.repository.delete(id)
        }
}