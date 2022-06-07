import express, { Request, Response } from 'express';
import { orderRoute } from './order';
import { productRoute } from './product';
import { userRoute } from './user';

const routes = express.Router();

routes.use('/v1/product', productRoute);
routes.use('/v1/user', userRoute);
routes.use('/v1/order', orderRoute);
routes.use('/', (req: Request, res: Response) => res.send('Working ⚒️'));

export default routes;
