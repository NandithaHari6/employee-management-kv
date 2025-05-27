import Employee, { EmployeeRole, Status } from "../entities/employee.entity";
import Address from "../entities/address.entitiy";
import EmployeeRepository from "../repositories/employee.repository";
import { CreateAddressDto } from "../dto/address.dto";
import { LoggerService } from "./logger.service";
import HttpException from "../exception/httpException";
import { DepartmentRepository } from "../repositories/department.repository";

class EmployeeService {
  private logger = LoggerService.getInstance(EmployeeService.name);
  constructor(
    private emmployeeRepository: EmployeeRepository,
    private departmentRepository: DepartmentRepository
  ) {}
  async createEmployee(
    employeeId: string,
    dateOfJoining: Date,
    experience: number,
    status: Status,
    dept_id: number,
    email: string,
    name: string,
    age: number,
    address: CreateAddressDto,
    password: string,
    role: EmployeeRole
  ): Promise<Employee> {
    const newEmp = new Employee();
    newEmp.name = name;
    newEmp.email = email;
    newEmp.age = age;
    (newEmp.status = status), (newEmp.employeeId = employeeId);
    newEmp.dateOfJoining = dateOfJoining;
    newEmp.experience = experience;
    const dept_obj = await this.departmentRepository.findOne(dept_id);
    newEmp.department = dept_obj;
    const addressObj = new Address();
    addressObj.line1 = address.line1;
    addressObj.pincode = address.pincode;
    addressObj.line2 = address.line2;
    addressObj.houseNo = address.houseNo;
    newEmp.address = addressObj;
    newEmp.password = password;
    newEmp.role = role;
    this.logger.info("New employee object being created");

    return this.emmployeeRepository.create(newEmp);
  }
  async getAllEmployees(): Promise<Employee[]> {
    // this.logger.info("Getting all employees");
    return this.emmployeeRepository.findMany();
  }
  async getEmployeeById(id: number): Promise<Employee | null> {
    let employee = await this.emmployeeRepository.findOneById(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  }
  // async getEmployeeById(id:number):Promise<Employee>{
  //     return this.emmployeeRepository.findOneById(id);
  // }
  async getEmployeeByEmail(email: string): Promise<Employee> {
    return this.emmployeeRepository.getByMail(email);
  }
  async updateEmployee(
    id: number,
    email: string,
    name: string,
    address: CreateAddressDto,
    age: number
  ) {
    const exsistingEmployee = await this.emmployeeRepository.findOneById(id);
    if (exsistingEmployee) {
      const employee = new Employee();
      employee.name = name;
      employee.email = email;
      const addressObj = new Address();
      addressObj.line1 = address.line1;
      addressObj.pincode = address.pincode;
      employee.address = addressObj;
      employee.age = age;
      this.logger.info("Employee being updated");
      await this.emmployeeRepository.update(id, employee);
    }
  }
  async deleteEmployee(id: number) {
    const exsistingEmployee = await this.emmployeeRepository.findOneById(id);
    if (exsistingEmployee) {
      await this.emmployeeRepository.delete(id);
    } else {
      throw new HttpException(404, "No emp with this id");
    }
  }
}
export default EmployeeService;
