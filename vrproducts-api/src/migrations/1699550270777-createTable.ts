import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1699550270777 implements MigrationInterface {
    name = 'createTable1699550270777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "description" character varying(60) NOT NULL, "price" numeric(13,3), "image" bytea, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stores" ("id" SERIAL NOT NULL, "description" character varying(60) NOT NULL, CONSTRAINT "PK_7aa6e7d71fa7acdd7ca43d7c9cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productstore" ("id" SERIAL NOT NULL, "salePrice" numeric(13,3) NOT NULL, "productId" integer, "storeId" integer, CONSTRAINT "PK_c5cea8ef04802d8390ace72377c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "productstore" ADD CONSTRAINT "FK_5167bea941dceb0772ac070e507" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productstore" ADD CONSTRAINT "FK_634a800c4b390b28d78db50eeb2" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productstore" DROP CONSTRAINT "FK_634a800c4b390b28d78db50eeb2"`);
        await queryRunner.query(`ALTER TABLE "productstore" DROP CONSTRAINT "FK_5167bea941dceb0772ac070e507"`);
        await queryRunner.query(`DROP TABLE "productstore"`);
        await queryRunner.query(`DROP TABLE "stores"`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
