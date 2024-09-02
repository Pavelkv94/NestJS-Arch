import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany, HasMany } from "sequelize-typescript";
import { Post } from "src/posts/posts.model";
import { Role } from "src/roles/role.model";
import { UserRoles } from "src/roles/user.roles.model";

//data for user creation
interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({ example: "1", description: "unique ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) //swagger
    id: number;

    @ApiProperty({ example: "test@test.tt", description: "unique email" }) //swagger
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: "123", description: "password" }) //swagger
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({ example: "false", description: "is banned" }) //swagger
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: "bla bla lba", description: "reason for ban" }) //swagger
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    //многие ко многих с использованием промежуточной таблицы userRoles
    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    //один юзер может иметь много постов
    @HasMany(() => Post)
    posts: Post[];
}
