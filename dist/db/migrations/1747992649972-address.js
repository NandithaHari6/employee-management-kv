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
exports.Address1747992649972 = void 0;
class Address1747992649972 {
    constructor() {
        this.name = 'Address1747992649972';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" ADD "house_no" integer `);
            yield queryRunner.query(`ALTER TABLE "address" ADD "line2" character varying `);
            yield queryRunner.query(`Update "address" set "house_no"=2 where "house_no" is NULL`);
            yield queryRunner.query(`Update "address" set "line2"='street' where "line2" is NULL`);
            yield queryRunner.query(`ALTER TABLE "address" alter column "house_no" set NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "address" alter column "line2" set NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" DROP COLUMN "line2"`);
            yield queryRunner.query(`ALTER TABLE "address" DROP COLUMN "house_no"`);
        });
    }
}
exports.Address1747992649972 = Address1747992649972;
//# sourceMappingURL=1747992649972-address.js.map