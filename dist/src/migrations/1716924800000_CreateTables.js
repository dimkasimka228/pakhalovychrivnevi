"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1716924800000 = void 0;
const typeorm_1 = require("typeorm");
class CreateTables1716924800000 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: true,
                },
            ],
        }), true);
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'stock',
                    type: 'int',
                    default: 0,
                },
                {
                    name: 'isActive',
                    type: 'boolean',
                    default: true,
                },
                {
                    name: 'category_id',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['category_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'categories',
                    onDelete: 'SET NULL',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('products');
        await queryRunner.dropTable('categories');
    }
}
exports.CreateTables1716924800000 = CreateTables1716924800000;
//# sourceMappingURL=1716924800000_CreateTables.js.map