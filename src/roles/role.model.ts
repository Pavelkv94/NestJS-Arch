import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { UserRoles } from "./user.roles.model";

//data for user creation
interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({ example: "1", description: "unique ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) //swagger
    id: number;

    @ApiProperty({ example: "admin", description: "role name" }) //swagger
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;

    @ApiProperty({ example: "System admin", description: "role description" }) //swagger
    @Column({ type: DataType.STRING, allowNull: true })
    description: string;

    //многие ко многих с использованием промежуточной таблицы userRoles
    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
