import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.model";

@Module({
    controllers: [UsersController],
    providers: [
        UsersService,
        {
            provide: "USERS_REPOSITORY",
            useValue: User,
        },
    ],
})
export class UsersModule {}
