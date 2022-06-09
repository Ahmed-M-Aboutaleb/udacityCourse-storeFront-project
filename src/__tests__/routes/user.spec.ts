import supertest from 'supertest';

import { app } from '../../server';

const request = supertest(app);

describe('User Routers', () => {
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
            .get('/v1/user/')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });
    it('Route get /:id', async () => {
        const response = await request
            .get('/v1/user/1')
            .set('Authorization', `Bearer ${token}`);
        expect(response.status).toBe(200);
    });
    it('Route post /', async () => {
        const response = await request.post('/v1/user/').send({
            firstname: 'test',
            lastname: 'test',
            password: 'test',
        });
        expect(response.status).toBe(200);
    });
});
