import { MigrationInterface, QueryRunner } from "typeorm";

export class DeptUnique1747997852011 implements MigrationInterface {
    name = 'DeptUnique1747997852011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "UQ_c05cf842893f20468a127fef360" UNIQUE ("dept_name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "UQ_c05cf842893f20468a127fef360"`);
    }

}
