
import { Column, Entity, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entitiy";
import Department from "./department.entity";
export enum EmployeeRole {
  UI = "UI",
  UX = "UX",
  DEVELOPER = "DEVELOPER",
  HR = "HR"
}
export enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  PROBATION = "PROBATION"
}

@Entity()
class Employee extends AbstractEntity {
  @Column({ nullable: false })
  employeeId: string;
  @Column({ nullable: false })
  dateOfJoining: Date;
  @Column({ nullable: false })
  experience: number;
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE
  })
  status: Status
  @Column({ unique: true })
  email: string;
  @Column()
  name: string;

  @Column()
  age: number;
  @OneToOne(() => Address, (address) => address.employee, {
    cascade: true
  })
  address: Address

  @Column({ nullable: false })
  password: string

  @Column({
    type: 'enum',
    enum: EmployeeRole,
    default: EmployeeRole.DEVELOPER
  })
  role: EmployeeRole

  @ManyToOne(() => Department, (department) => department.employee, {
    cascade: true,
    onDelete: 'SET NULL',
  })

  department: Department

}


export default Employee;
