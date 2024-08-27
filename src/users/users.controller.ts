import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.model";


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
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
