import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();
const connectStr = process.env.CONNECT;

@Module({
  imports: [
    MongooseModule.forRoot(connectStr)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
