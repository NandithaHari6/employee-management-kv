"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeService = void 0;
const express_1 = __importDefault(require("express"));
const employee_repository_1 = __importDefault(require("../repositories/employee.repository"));
const data_source_1 = __importDefault(require("../db/data-source"));
const employee_entity_1 = __importDefault(require("../entities/employee.entity"));
const employee_services_1 = __importDefault(require("../services/employee.services"));
const employee_controllers_1 = __importDefault(require("../controllers/employee.controllers"));
const department_route_1 = require("./department.route");
const employeeRouter = express_1.default.Router();
const employeeRepository = new employee_repository_1.default(data_source_1.default.getRepository(employee_entity_1.default));
const employeeService = new employee_services_1.default(employeeRepository, department_route_1.departmentRepository);
exports.employeeService = employeeService;
const employeeController = new employee_controllers_1.default(employeeService, employeeRouter);
exports.default = employeeRouter;
//# sourceMappingURL=employee.route.js.map