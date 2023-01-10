import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

const gql = '/graphql';

describe(gql, () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should get hello', () => {
    return request(app.getHttpServer())
      .post(gql)
      .send({ query: '{ hello }' })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.hello).toEqual('Hello World!');
      });
  });
});
