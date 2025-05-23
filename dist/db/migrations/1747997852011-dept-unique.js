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
exports.DeptUnique1747997852011 = void 0;
class DeptUnique1747997852011 {
    constructor() {
        this.name = 'DeptUnique1747997852011';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "UQ_c05cf842893f20468a127fef360" UNIQUE ("dept_name")`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "UQ_c05cf842893f20468a127fef360"`);
        });
    }
}
exports.DeptUnique1747997852011 = DeptUnique1747997852011;
//# sourceMappingURL=1747997852011-dept-unique.js.map