import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
    @ApiProperty({ example: "Admin", description: "role name" }) //swagger
    readonly value: string;
    @ApiProperty({ example: "system admin", description: "role description" }) //swagger
    readonly description: string;
}
