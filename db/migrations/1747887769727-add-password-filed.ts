import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPasswordFiled1747887769727 implements MigrationInterface {
    name = 'AddPasswordFiled1747887769727'

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying `);
         await queryRunner.query(`Update "employee" set "password"='passwrord' where "password" is NULL`);``
         await queryRunner.query(`Alter Table "employee" alter column "password" Set not null`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
    }

}
