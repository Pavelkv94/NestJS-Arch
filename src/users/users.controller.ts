import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.model";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth-decorator";
import { RolesGuard } from "src/auth/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@ApiTags("Users") //swagger
@Controller("users")
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({ summary: "user creation" }) //swagger
    @ApiResponse({ status: 200, type: User }) //swagger
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: "Getting all users" }) //swagger
    @ApiResponse({ status: 200, type: [User] }) //swagger
    @UseGuards(JwtAuthGuard) //added Guard for unauthorized requests
    @Roles("ADMIN") //custom decorator
    @UseGuards(RolesGuard) //guard for check roles
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({ summary: "Give role" }) //swagger
    @ApiResponse({ status: 200 }) //swagger
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/role")
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({ summary: "Ban user" }) //swagger
    @ApiResponse({ status: 200 }) //swagger
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/ban")
    banUser(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto);
    }
}
