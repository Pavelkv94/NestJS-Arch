import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);

    //set swagger
    const config = new DocumentBuilder().setTitle("NEstJS course").setDescription("My NestJS app for learning").setVersion("1.0.0").addTag("Test").build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

// app.useGlobalGuards(JwtAuthGuard) //guards for  all endpoints

    await app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
}

start();
