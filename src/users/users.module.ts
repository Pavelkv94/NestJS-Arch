import { forwardRef, Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { User } from "./user.model";
import { Role } from "src/roles/role.model";
import { UserRoles } from "src/roles/user.roles.model";
import { RolesModule } from "src/roles/roles.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [SequelizeModule.forFeature([User, Role, UserRoles]), RolesModule, forwardRef(() => AuthModule)],
    exports: [UsersService],
})
export class UsersModule {}
