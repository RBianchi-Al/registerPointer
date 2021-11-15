import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCompany1636996368056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "company",
            columns: [ 
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "razao",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "cnpj",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "fantasy_name",
                    type: "varchar",
                    isNullable: true,
                },

               { 
                   name: "created_at",
                   type: "timestamp",
                   isNullable: false,
                   default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable: false,
                    default: "now()",
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("company")
    }

}
