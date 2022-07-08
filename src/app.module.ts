import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { ProductModule } from './product/product.module';

dotenv.config();
const connectStr = process.env.CONNECT;

@Module({
  imports: [
    MongooseModule.forRoot(connectStr),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
