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
Object.defineProperty(exports, "__esModule", { value: true });
class DepartmentController {
    constructor(deptService, router) {
        this.deptService = deptService;
        router.post("/", this.createDepartment.bind(this));
        router.post("/addEmp", this.addEmployeeToDept.bind(this));
        router.get("/", this.getAllDepartment.bind(this));
        router.delete("/:id", this.deleteDepartment.bind(this));
    }
    createDepartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dept_name = req.body.dept_name;
            const dept = yield this.deptService.createDepartment(dept_name);
            res.status(201).send(dept);
        });
    }
    addEmployeeToDept(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const emp_id = req.body.emp_id;
            const dept_id = req.body.dept_id;
            const newEmp = yield this.deptService.addEmployeeToDepartment(emp_id, dept_id);
            res.status(200).send(newEmp);
        });
    }
    getAllDepartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allDepts = yield this.deptService.getAllDeparments();
            res.status(200).send(allDepts);
        });
    }
    deleteDepartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log(id);
            yield this.deptService.deleteDepartmentById(id);
            res.status(200).send("Deleted department");
        });
    }
}
exports.default = DepartmentController;
//# sourceMappingURL=dept.controllers.js.map