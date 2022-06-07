import supertest from 'supertest';

import { app } from '../../server';

const request = supertest(app);

describe('User Routers', () => {
    it('Route get /', async () => {
        const response = await request.get('/v1/user/');
        expect(response.status).toBe(401);
    });
    it('Route get /:id', async () => {
        const response = await request.get('/v1/user/1');
        expect(response.status).toBe(401);
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
