import { Module } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/user.model";

@Module({
    controllers: [],
    imports: [
        UsersModule,
        //connect .env
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV}`,
        }),
    ],
    providers: [
        //connect PostgreSQL
        {
            provide: "SEQUELIZE",
            useFactory: async () => {
                const sequelize = new Sequelize({
                    dialect: "postgres",
                    host: process.env.POSTGRES_HOST,
                    port: +process.env.POSTGRES_PORT,
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                });
                sequelize.addModels([User]);
                await sequelize.sync();
                return sequelize;
            },
        },
    ],
})
export class AppModule {}
