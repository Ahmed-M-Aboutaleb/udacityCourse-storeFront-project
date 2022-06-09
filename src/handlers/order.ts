import { Request, Response } from 'express';
import { OrderModel } from '../models/order';

const Order = new OrderModel();

export const orderIndex = async (_req: Request, res: Response) => {
    try {
        const order = await Order.index();
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
