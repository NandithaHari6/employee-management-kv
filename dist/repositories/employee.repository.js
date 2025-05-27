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
class EmployeeRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(employee);
        });
    }
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find({
                relations: {
                    address: true,
                    department: true
                }
            });
        });
    }
    getByMail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ email });
        });
    }
    findOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOne({
                relations: {
                    address: true,
                    department: true
                },
                where: { id }
            });
        });
    }
    update(id, employee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.save(Object.assign({ id }, employee));
        });
    }
    updateEmpDept(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.save(employee);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const emp = yield this.repository.findOneBy({ id });
            console.log(emp);
            yield this.repository.remove(emp);
        });
    }
}
exports.default = EmployeeRepository;
//# sourceMappingURL=employee.repository.js.map