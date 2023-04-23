import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules';

const corsOptions = {
  //origin: /\.text\.com$/,
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3003',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: corsOptions,
    bodyParser: true,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
