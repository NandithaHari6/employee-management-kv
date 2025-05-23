import express from 'express';
import EmployeeRepository from '../repositories/employee.repository';
import datasource from '../db/data-source';
import Employee from '../entities/employee.entity';
import EmployeeService from '../services/employee.services';
import EmployeeController from '../controllers/employee.controllers';
import { DepartmentRepository } from '../repositories/department.repository';
import Department from '../entities/department.entity';
import DepartmentService from '../services/department.service';
import DepartmentController from '../controllers/dept.controllers';
const departmentRouter=express.Router();

const departmentRepository=new DepartmentRepository(datasource.getRepository(Department));
const employeeRepository=new EmployeeRepository(datasource.getRepository(Employee));

const departmentService=new DepartmentService(departmentRepository,employeeRepository);
const departmentController=new DepartmentController(departmentService,departmentRouter);
export {departmentRepository}
export default departmentRouter