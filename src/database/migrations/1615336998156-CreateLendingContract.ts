import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLendingContract1615336998156 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'lendingContract',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()', 
                    },
                    {
                        name: 'date',
                        type: 'date',
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                    },
                    {
                        name: 'equipment_id',
                        type: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        )

        await queryRunner.createForeignKey(
            'lendingContract',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'users',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'lendingContract',
            new TableForeignKey({
              columnNames: ['equipment_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'equipments',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
