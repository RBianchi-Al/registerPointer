import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1636996460036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: "address",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,

                },
                {
                    name: 'cep',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'street',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'complement',
                    type: 'varchar',
                    length: '255',
                    isNullable: true,
                },
                {
                    name: 'state',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'number',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'city',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'country',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: "company_id",
                    type: "uuid",
                    isNullable: false,
                },
                {
                    name: "user_id",
                    type: "uuid",
                    isNullable: false,
                },
            ],
            foreignKeys: [
                {               
                    referencedTableName: 'company',
                    referencedColumnNames: ['id'],
                    columnNames: ['company_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'SET NULL',
                  },
                  {
                    referencedTableName: 'user',
                    referencedColumnNames: ['id'],
                    columnNames: ['user_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'SET NULL',
                  },
            ]
        }
    ))
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address")
    }

}
