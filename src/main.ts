import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SAT Platform API')
    .setDescription('SAT savol-javob backend API hujjati')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document,  {
    swaggerOptions: {
      persistAuthorization: true,  
    },
  }); ;

  await app.listen(3000);
}
bootstrap();
