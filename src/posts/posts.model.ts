import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Role } from "src/roles/role.model";
import { UserRoles } from "src/roles/user.roles.model";
import { User } from "src/users/user.model";

//data for user creation
interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty({ example: "1", description: "unique ID" })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }) //swagger
    id: number;

    @ApiProperty({ example: "title", description: "Post title" }) //swagger
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    title: string;

    @ApiProperty({ example: "bla bla lba", description: "Post content" }) //swagger
    @Column({ type: DataType.STRING, allowNull: true })
    content: string;

    @ApiProperty({ example: "bla bla lba", description: "Post image" }) //swagger
    @Column({ type: DataType.STRING })
    image: string;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    //один ко многих с использованием промежуточной таблицы userRoles
    @BelongsTo(() => User)
    author: User;
}
