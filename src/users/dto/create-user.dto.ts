import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "test@test.tt", description: "unique email" }) //swagger
    readonly email: string;
    @ApiProperty({ example: "12323", description: "user password" }) //swagger
    readonly password: string;
}
