"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentRepository = void 0;
const express_1 = __importDefault(require("express"));
const employee_repository_1 = __importDefault(require("../repositories/employee.repository"));
const data_source_1 = __importDefault(require("../db/data-source"));
const employee_entity_1 = __importDefault(require("../entities/employee.entity"));
const department_repository_1 = require("../repositories/department.repository");
const department_entity_1 = __importDefault(require("../entities/department.entity"));
const department_service_1 = __importDefault(require("../services/department.service"));
const dept_controllers_1 = __importDefault(require("../controllers/dept.controllers"));
const departmentRouter = express_1.default.Router();
const departmentRepository = new department_repository_1.DepartmentRepository(data_source_1.default.getRepository(department_entity_1.default));
exports.departmentRepository = departmentRepository;
const employeeRepository = new employee_repository_1.default(data_source_1.default.getRepository(employee_entity_1.default));
const departmentService = new department_service_1.default(departmentRepository, employeeRepository);
const departmentController = new dept_controllers_1.default(departmentService, departmentRouter);
exports.default = departmentRouter;
//# sourceMappingURL=department.route.js.map