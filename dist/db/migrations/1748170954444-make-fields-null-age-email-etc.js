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
exports.MakeFieldsNullAgeEmailEtc1748170954444 = void 0;
class MakeFieldsNullAgeEmailEtc1748170954444 {
    constructor() {
        this.name = 'MakeFieldsNullAgeEmailEtc1748170954444';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "pincode" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "email" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "age" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "password" DROP NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "password" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "age" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "employee" ALTER COLUMN "email" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "pincode" SET NOT NULL`);
        });
    }
}
exports.MakeFieldsNullAgeEmailEtc1748170954444 = MakeFieldsNullAgeEmailEtc1748170954444;
//# sourceMappingURL=1748170954444-make-fields-null-age-email-etc.js.map