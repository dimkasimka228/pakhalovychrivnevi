"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1716924800002 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsers1716924800002 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'serial',
                    isPrimary: true,
                },
                {
                    name: 'username',
                    type: 'varchar',
                    length: '255',
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '255',
                },
                {
                    name: 'role',
                    type: 'enum',
                    enum: ['user', 'admin'],
                    default: "'user'",
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsers1716924800002 = CreateUsers1716924800002;
//# sourceMappingURL=1716924800002_CreateUsers.js.map