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
exports.AddPasswordFiled1747887769727 = void 0;
class AddPasswordFiled1747887769727 {
    constructor() {
        this.name = 'AddPasswordFiled1747887769727';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying `);
            yield queryRunner.query(`Update "employee" set "password"='passwrord' where "password" is NULL`);
            ``;
            yield queryRunner.query(`Alter Table "employee" alter column "password" Set not null`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
        });
    }
}
exports.AddPasswordFiled1747887769727 = AddPasswordFiled1747887769727;
//# sourceMappingURL=1747887769727-add-password-filed.js.map