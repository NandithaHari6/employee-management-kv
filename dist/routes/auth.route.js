"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controllers_1 = require("../controllers/auth.controllers");
const express_1 = require("express");
const auth_service_1 = require("../services/auth.service");
const employee_route_1 = require("./employee.route");
const authRouter = new express_1.Router();
// const repository=datasource.getRepository(Employee);
// const employeeRepository=new EmployeeRepository(repository);
// const employeeService=new EmployeeRepository(employeeRepository);
const authService = new auth_service_1.AuthService(employee_route_1.employeeService);
new auth_controllers_1.AuthController(authService, authRouter);
exports.default = authRouter;
//# sourceMappingURL=auth.route.js.map