import { MigrationInterface, QueryRunner } from "typeorm";

export class NewFieldsAdded1747989915181 implements MigrationInterface {
    name = 'NewFieldsAdded1747989915181'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "employee_id" character varying `);
        await queryRunner.query(`ALTER TABLE "employee" ADD "date_of_joining" TIMESTAMP `);
        await queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer `);

        await queryRunner.query(`Update "employee" set "employee_id"='e_123' where "employee_id" is NULL`)
        await queryRunner.query(`Update "employee" set "date_of_joining"='2025-05-23T01:01:48.093Z' where "date_of_joining" is NULL`)
        await queryRunner.query(`Update "employee" set "experience"= 1 where "experience" is NULL`)

        await queryRunner.query(`ALTER TABLE "employee" Alter column "employee_id" set NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" alter column "date_of_joining" set NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" Alter column "experience" set NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."employee_status_enum" AS ENUM('ACTIVE', 'INACTIVE', 'PROBATION')`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "status" "public"."employee_status_enum" NOT NULL DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TYPE "public"."employee_status_enum"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "date_of_joining"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "employee_id"`);
    }

}
