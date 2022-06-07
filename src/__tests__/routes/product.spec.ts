import supertest from 'supertest';

import { app } from '../../server';

const request = supertest(app);

describe('Product Routers', () => {
    it('Route get /', async () => {
        const response = await request.get('/v1/product/');
        expect(response.status).toBe(200);
    });
    it('Route get /:id', async () => {
        const response = await request.get('/v1/product/1');
        expect(response.status).toBe(200);
    });
    it('Route post /', async () => {
        const response = await request.post('/v1/product/').send({
            name: 'test',
            price: 20,
        });
        expect(response.status).toBe(401);
    });
});
