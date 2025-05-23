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
const employee_entity_1 = __importDefault(require("../entities/employee.entity"));
const address_entitiy_1 = __importDefault(require("../entities/address.entitiy"));
const logger_service_1 = require("./logger.service");
class EmployeeService {
    constructor(emmployeeRepository, departmentRepository) {
        this.emmployeeRepository = emmployeeRepository;
        this.departmentRepository = departmentRepository;
        this.logger = logger_service_1.LoggerService.getInstance(EmployeeService.name);
    }
    createEmployee(employeeId, dateOfJoining, experience, status, dept_id, email, name, age, address, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmp = new employee_entity_1.default();
            newEmp.name = name;
            newEmp.email = email;
            newEmp.age = age;
            newEmp.status = status,
                newEmp.employeeId = employeeId;
            newEmp.dateOfJoining = dateOfJoining;
            newEmp.experience = experience;
            const dept_obj = yield this.departmentRepository.findOne(dept_id);
            newEmp.department = dept_obj;
            const addressObj = new address_entitiy_1.default();
            addressObj.line1 = address.line1;
            addressObj.pincode = address.pincode;
            addressObj.line2 = address.line2;
            addressObj.houseNo = address.houseNo;
            newEmp.address = addressObj;
            newEmp.password = password;
            newEmp.role = role;
            this.logger.info("New employee object being created");
            return this.emmployeeRepository.create(newEmp);
        });
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("Getting all employees");
            return this.emmployeeRepository.findMany();
        });
    }
    getEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let employee = yield this.emmployeeRepository.findOneById(id);
            if (!employee) {
                throw new Error("Employee not found");
            }
            return employee;
        });
    }
    // async getEmployeeById(id:number):Promise<Employee>{
    //     return this.emmployeeRepository.findOneById(id);
    // }
    getEmployeeByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emmployeeRepository.getByMail(email);
        });
    }
    updateEmployee(id, email, name, address, age) {
        return __awaiter(this, void 0, void 0, function* () {
            const exsistingEmployee = yield this.emmployeeRepository.findOneById(id);
            if (exsistingEmployee) {
                const employee = new employee_entity_1.default();
                employee.name = name;
                employee.email = email;
                const addressObj = new address_entitiy_1.default();
                addressObj.line1 = address.line1;
                addressObj.pincode = address.pincode;
                employee.address = addressObj;
                employee.age = age;
                this.logger.info("Employee being updated");
                yield this.emmployeeRepository.update(id, employee);
            }
        });
    }
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exsistingEmployee = yield this.emmployeeRepository.findOneById(id);
            if (!exsistingEmployee) {
                yield this.emmployeeRepository.delete(id);
            }
            else {
            }
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employee.services.js.map