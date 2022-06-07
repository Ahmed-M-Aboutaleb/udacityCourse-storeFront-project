import express from 'express';
import { productCreate, productIndex, productShow } from '../handlers/product';
import verifyToken from '../middleware/verifyToken';

export const productRoute = express.Router();

productRoute.get('/', productIndex);
productRoute.get('/:id', productShow);
productRoute.post('/', verifyToken, productCreate);
