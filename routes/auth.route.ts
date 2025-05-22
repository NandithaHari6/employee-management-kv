import { AuthController } from "../controllers/auth.controllers";
import {Router} from 'express'
import { AuthService } from "../services/auth.service";
import { employeeService } from "./employee.route";
const authRouter=new Router()
// const repository=datasource.getRepository(Employee);
// const employeeRepository=new EmployeeRepository(repository);
// const employeeService=new EmployeeRepository(employeeRepository);
const authService=new AuthService(employeeService)
new AuthController(authService,authRouter)
export default authRouter;