import express from 'express';
import { orderIndex } from '../handlers/order';
import verifyToken from '../middleware/verifyToken';

export const orderRoute = express.Router();

orderRoute.get('/', verifyToken, orderIndex);
