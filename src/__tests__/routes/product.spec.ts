import supertest from 'supertest';

import { app } from '../../server';

const request = supertest(app);

describe('Product Routers', () => {
    let token: string;
    beforeAll(async () => {
        const userTest = {
            firstname: 'User',
            lastname: 'Test',
            password: 'test',
        };
        const response = await request.post('/v1/user/').send(userTest);
        token = response.body;
    });
    it('Route get /', async () => {
        const response = await request.get('/v1/product/');
        expect(response.status).toBe(200);
    });
    it('Route get /:id', async () => {
        const response = await request.get('/v1/product/1');
        expect(response.status).toBe(200);
    });
    it('Route post /', async () => {
        const response = await request
            .post('/v1/product/')
            .send({
                name: 'test',
                price: 20,
            })
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });
});
