import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { Role } from "./role.model";

//createdAt: false, updatedAt: false - remove default fields
@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) //swagger
    id: number;

    @ForeignKey(() => Role) //links to other models
    @Column({ type: DataType.INTEGER})
    roleId: number;

    @ForeignKey(() => User) //links to other models
    @Column({ type: DataType.INTEGER })
    userId: number;
}
