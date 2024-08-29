import { Module } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { RolesController } from "./roles.controller";
import { Role } from "./role.model";
import { User } from "src/users/user.model";
import { UserRoles } from "./user.roles.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    providers: [RolesService],
    controllers: [RolesController],
    imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
    exports: [RolesService],
})
export class RolesModule {}
