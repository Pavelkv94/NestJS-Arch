import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "test@test.tt", description: "unique email" }) //swagger
    @IsString({ message: "should be string" })
    @IsEmail({}, { message: "Incorrect email" })
    readonly email: string;
    @ApiProperty({ example: "12323", description: "user password" }) //swagger
    @IsString({ message: "should be string" })
    @Length(4, 16, { message: "Password incorrect" })
    readonly password: string;
}
