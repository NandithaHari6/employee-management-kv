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
const httpException_1 = __importDefault(require("../exception/httpException"));
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const employee_dto_1 = require("../dto/employee.dto");
class EmployeeController {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        router.get("/", this.getAllEmployees.bind(this));
        router.post("/", this.createEmployee.bind(this));
        router.put("/:id", this.updateEmployee.bind(this));
        router.delete("/:id", this.deleteEmployee.bind(this));
        router.get("/:id", this.getEmployeeById.bind(this));
    }
    createEmployee(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createEmployeeDto = (0, class_transformer_1.plainToInstance)(employee_dto_1.CreateEmployeeDto, req.body);
                const errors = yield (0, class_validator_1.validate)(createEmployeeDto);
                if (errors.length > 0) {
                    console.log(JSON.stringify(errors));
                    throw new httpException_1.default(400, JSON.stringify(errors));
                }
                const savedEmployee = yield this.employeeService.createEmployee(createEmployeeDto.email, createEmployeeDto.name, createEmployeeDto.age, createEmployeeDto.address);
                res.status(201).send(savedEmployee);
            }
            catch (error) {
                next(error);
            }
            //   try{  const name=req.body.name;
            //     const email=req.body.email;
            //     if(!isEmail(email)){
            //         throw new  HttpException(412,"Enter a valid email")
            //     }
            //     const age=req.body.age;
            //     const address=req.body.address;
            //     const emp=await this.employeeService.createEmployee(name,email,age,address)
            //     res.status(201).send(emp);}
            //     catch(err){
            //         console.log(err);
            //         next(err)
            //     }
        });
    }
    getAllEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield this.employeeService.getAllEmployees();
            res.status(200).send(employees);
        });
    }
    getEmployeeById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const emp = yield this.employeeService.getEmployeeById(id);
                if (!emp) {
                    throw new httpException_1.default(404, "No employee wuth this id");
                }
                res.status(200).send(emp);
            }
            catch (err) {
                console.log("Error", err);
                next(err);
            }
        });
    }
    updateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            const name = req.body.name;
            const email = req.body.email;
            yield this.employeeService.updateEmployee(id, email, name);
            res.status(200).send("Updated");
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = Number(req.params.id);
            yield this.employeeService.deleteEmployee(id);
        });
    }
}
exports.default = EmployeeController;
//# sourceMappingURL=employee.controllers.js.map