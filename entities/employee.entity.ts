
import {Column,Entity, JoinColumn, OneToOne,ManyToOne} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entitiy";
import Department from "./department.entity";
export enum EmployeeRole{
  UI="UI",
  UX="UX",
  DEVELOPER="DEVELOPER",
  HR="HR"
}
@Entity()
class Employee extends AbstractEntity {

    @Column({unique: true})
    email: string;
    @Column()
    name: string;
  
    @Column()
    age:number;
    @OneToOne(()=>Address,(address)=>address.employee,{
      cascade:true
    })
   
    address:Address

    @Column({nullable:false})
    password:string
 
    @Column({type:'enum',
      enum:EmployeeRole,
      default:EmployeeRole.DEVELOPER
    })
    @ManyToOne(()=>Department,(department)=>department.employee,{
      cascade:true
    })
    @JoinColumn()
    department:Department
    role:EmployeeRole
  }

  
  export default Employee;
  