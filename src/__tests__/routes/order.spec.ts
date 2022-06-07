import supertest from 'supertest';

import { app } from '../../server';

const request = supertest(app);

describe('Order Routers', () => {
    it('Route get /', async () => {
        const response = await request.get('/v1/order/');
        expect(response.status).toBe(401);
    });
});
