import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEquipment1610736541381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table({
                name: 'equipments',
                columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'identification',
                    type: 'varchar',
                },
                {
                    name: 'type_id',
                    type: 'uuid',
                },
                {
                    name: 'isAvailable',
                    type: 'boolean',
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
            'equipments',
            new TableForeignKey({
              columnNames: ['type_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'types',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('equipments');
    }

}
