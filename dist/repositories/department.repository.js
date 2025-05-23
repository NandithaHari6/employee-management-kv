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
exports.DepartmentRepository = void 0;
class DepartmentRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(department) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(department);
        });
    }
    findDepartmentId(dept_name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ dept_name });
        });
    }
    listEmployees(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find({ where: id,
                relations: {
                    employee: true
                }
            });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id });
        });
    }
    findDepts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find({
                relations: {
                    employee: true
                }
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // const dept=await this.repository.findOneBy({id})
            yield this.repository.delete(id);
        });
    }
}
exports.DepartmentRepository = DepartmentRepository;
//# sourceMappingURL=department.repository.js.map