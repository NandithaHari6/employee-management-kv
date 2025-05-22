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
class EmployeeService {
    constructor(emmployeeRepository) {
        this.emmployeeRepository = emmployeeRepository;
    }
    createEmployee(email, name, age, address, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmp = new employee_entity_1.default();
            newEmp.name = name;
            newEmp.email = email;
            newEmp.age = age;
            const addressObj = new address_entitiy_1.default();
            addressObj.line1 = address.line1;
            addressObj.pincode = address.pincode;
            newEmp.address = addressObj;
            newEmp.password = password;
            newEmp.role = role;
            return this.emmployeeRepository.create(newEmp);
        });
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emmployeeRepository.findMany();
        });
    }
    getEmployeeById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emmployeeRepository.findOneById(id);
        });
    }
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
                yield this.emmployeeRepository.update(id, employee);
            }
        });
    }
    deleteEmployee(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exsistingEmployee = yield this.emmployeeRepository.findOneById(id);
            if (exsistingEmployee) {
                yield this.emmployeeRepository.delete(id);
            }
        });
    }
}
exports.default = EmployeeService;
//# sourceMappingURL=employee.services.js.map