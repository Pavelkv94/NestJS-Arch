import { Inject, Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @Inject("USERS_REPOSITORY")
        private userRepository: typeof User
    ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll<User>();
        return users;
    }
}
