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
exports.NewFieldsAdded1747989915181 = void 0;
class NewFieldsAdded1747989915181 {
    constructor() {
        this.name = 'NewFieldsAdded1747989915181';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" ADD "employee_id" character varying `);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "date_of_joining" TIMESTAMP `);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer `);
            yield queryRunner.query(`Update "employee" set "employee_id"='e_123' where "employee_id" is NULL`);
            yield queryRunner.query(`Update "employee" set "date_of_joining"='2025-05-23T01:01:48.093Z' where "date_of_joining" is NULL`);
            yield queryRunner.query(`Update "employee" set "experience"= 1 where "experience" is NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" Alter column "employee_id" set NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" alter column "date_of_joining" set NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" Alter column "experience" set NOT NULL`);
            yield queryRunner.query(`CREATE TYPE "public"."employee_status_enum" AS ENUM('ACTIVE', 'INACTIVE', 'PROBATION')`);
            yield queryRunner.query(`ALTER TABLE "employee" ADD "status" "public"."employee_status_enum" NOT NULL DEFAULT 'ACTIVE'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "status"`);
            yield queryRunner.query(`DROP TYPE "public"."employee_status_enum"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "date_of_joining"`);
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_id"`);
        });
    }
}
exports.NewFieldsAdded1747989915181 = NewFieldsAdded1747989915181;
//# sourceMappingURL=1747989915181-new-fields-added.js.map