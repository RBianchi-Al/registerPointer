import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1636996453621 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [ 
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'cpf',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },               
                {
                    name: "dat_nasc",
                     type: 'timestamp',
                    isNullable: false,

                },
                {
                    name: "nis_pis",
                    type: "varchar",
                    length: '12',
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: '255',
                    isNullable: false,
                },
                {
                    name: "senha",
                    type: "varchar",
                    length: '255',
                    isNullable: false,
                },
                {
                    name: "dat_adm",
                     type: 'timestamp',
                    isNullable: false,
                },
                {
                    name: "dat_dem",
                     type: 'timestamp',
                    isNullable: false,
                },
                {
                    name: "company_id",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: 'updated_at',
                     type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },
               { 
                    name: 'created_at',
                     type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
             },
            ],
            foreignKeys: [
                {
                  
                    referencedTableName: 'company',
                    referencedColumnNames: ['id'],
                    columnNames: ['company_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'SET NULL',
                  }
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user")
    }

}
