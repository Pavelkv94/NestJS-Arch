import { ApiProperty } from "@nestjs/swagger";

export class AddRoleDto {
    @ApiProperty({ example: "ADMIN", description: "Role value" }) //swagger
    readonly value: string;
    @ApiProperty({ example: "2", description: "user id" }) //swagger
    readonly userId: number;
}
