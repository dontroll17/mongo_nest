import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });


  afterEach(async () => {
    await app.close();
  });

  it('/product (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/product')
      .expect(200);
  });

  it('/todo (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/todo')
      .expect(200);
  });
});
