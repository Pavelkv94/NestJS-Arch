import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length } from "class-validator";

export class CreatePostDto {
    @ApiProperty({ example: "Post title", description: "Post title" }) //swagger
    @IsString({ message: "should be string" })
    readonly title: string;
    @ApiProperty({ example: "Post content", description: "Post content" }) //swagger
    @IsString({ message: "should be string" })
    readonly content: string;
    @ApiProperty({ example: 5, description: "user id" }) //swagger
    @IsNumber()
    readonly userId: number;
}
