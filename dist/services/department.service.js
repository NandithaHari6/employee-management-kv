"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const department_entity_1 = __importDefault(require("../entities/department.entity"));
const logger_service_1 = require("./logger.service");
class DepartmentService {
    constructor(departmentRepository, employeeRepository) {
        this.departmentRepository = departmentRepository;
        this.employeeRepository = employeeRepository;
        this.logger = logger_service_1.LoggerService.getInstance(DepartmentService.name);
    }
    createDepartment(dept_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const dept = new department_entity_1.default;
            dept.dept_name = dept_name;
            return this.departmentRepository.create(dept);
        });
    }
    addEmployeeToDepartment(emp_id, dept_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const emp = yield this.employeeRepository.findOneById(emp_id);
            emp.department = dept_id;
            this.logger.info(`Adding employee with id ${emp_id} to department ${dept_id}`);
            return this.employeeRepository.updateEmpDept(emp);
        });
    }
    getAllDeparments() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.departmentRepository.findDepts();
        });
    }
    deleteDepartmentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingid = yield this.departmentRepository.findOne(id);
            if (existingid) {
                yield this.departmentRepository.delete(id);
            }
        });
    }
}
exports.default = DepartmentService;
//# sourceMappingURL=department.service.js.map