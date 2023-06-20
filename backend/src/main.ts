import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.NODE_ENV || 3000;

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Track-and-Trace')
    .setDescription('Track-and-Trace API')
    .setVersion('1.0')
    .addTag('default')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(PORT);
}
bootstrap();
