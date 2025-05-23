import { MigrationInterface, QueryRunner } from "typeorm";

export class Address1747992649972 implements MigrationInterface {
    name = 'Address1747992649972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "house_no" integer `);
        await queryRunner.query(`ALTER TABLE "address" ADD "line2" character varying `);
        await queryRunner.query(`Update "address" set "house_no"=2 where "house_no" is NULL`)
        await queryRunner.query(`Update "address" set "line2"='street' where "line2" is NULL`)

        await queryRunner.query(`ALTER TABLE "address" alter column "house_no" set NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" alter column "line2" set NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "line2"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "house_no"`);
    }

}
