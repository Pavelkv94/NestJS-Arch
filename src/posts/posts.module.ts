import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { Post } from "./posts.model";
import { User } from "src/users/user.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { FilesModule } from "src/files/files.module";

@Module({
    providers: [PostsService],
    controllers: [PostsController],
    imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
