import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "./role.model";

@ApiTags("Roles") //swagger
@Controller("roles")
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({ summary: "Role creation" }) //swagger
    @ApiResponse({ status: 200, type: Role }) //swagger
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }

    @ApiOperation({ summary: "Role getting" }) //swagger
    @ApiResponse({ status: 200, type: [Role] }) //swagger
    @Get("/:value")
    getByValue(@Param("value") value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
