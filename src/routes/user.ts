import express from 'express';
import { userCreate, userIndex, userShow } from '../handlers/user';
import verifyToken from '../middleware/verifyToken';

export const userRoute = express.Router();

userRoute.get('/', verifyToken, userIndex);
userRoute.get('/:id', verifyToken, userShow);
userRoute.post('/', userCreate);
