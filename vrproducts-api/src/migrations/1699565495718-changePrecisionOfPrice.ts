import { MigrationInterface, QueryRunner } from "typeorm";

export class changePrecisionOfPrice1699565495718 implements MigrationInterface {
    name = 'changePrecisionOfPrice1699565495718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(16,3)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric(13,3)`);
    }

}
