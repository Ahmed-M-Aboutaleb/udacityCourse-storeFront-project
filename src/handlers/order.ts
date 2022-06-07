import { Request, Response } from 'express';
import { OrderModel } from '../models/order';

const Order = new OrderModel();

export const orderIndex = async (_req: Request, res: Response) => {
    const id = _req.body.decoded.user_id as number;
    const order = await Order.index(id);
    res.json(order);
};
