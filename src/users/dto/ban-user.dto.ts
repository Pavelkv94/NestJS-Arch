import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class BanUserDto {
    @ApiProperty({ example: "cheat hack", description: "Ban reason" }) //swagger
    @IsString({ message: "should be string" })
    readonly banReason: string;
    @ApiProperty({ example: "2", description: "user id" }) //swagger
    readonly userId: number;
}
