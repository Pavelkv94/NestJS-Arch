import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AddRoleDto {
    @ApiProperty({ example: "ADMIN", description: "Role value" }) //swagger
    @IsString({ message: "should be string" })
    readonly value: string;

    @ApiProperty({ example: "2", description: "user id" }) //swagger
    readonly userId: number;
}
