import { Module } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/role.model";
import { UserRoles } from "./roles/user.roles.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "./auth/auth.module";
import { PostsModule } from "./posts/posts.module";
import { Post } from "./posts/posts.model";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";

@Module({
    controllers: [],
    imports: [
        //connect .env
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, "static"),
        }),
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ],
})
export class AppModule {}
