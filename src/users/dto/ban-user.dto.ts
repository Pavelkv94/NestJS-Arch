import { ApiProperty } from "@nestjs/swagger";

export class BanUserDto {
    @ApiProperty({ example: "cheat hack", description: "Ban reason" }) //swagger
    readonly banReason: string;
    @ApiProperty({ example: "2", description: "user id" }) //swagger
    readonly userId: number;
}
