import supertest from 'supertest';

import { app } from '../../server';

const request = supertest(app);

describe('Order Routers', () => {
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
        const response = await request
            .get('/v1/order/')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });
});
