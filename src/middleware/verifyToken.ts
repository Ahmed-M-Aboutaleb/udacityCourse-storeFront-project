import { NextFunction, Request, Response } from 'express';

import { verify } from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader: string = req.headers.authorization as string;
        const token = authorizationHeader.split(' ')[1];
        const decoded = verify(token, process.env.JWT_SECRET as string);
        req.body.decoded = decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(401);
        res.json('Access denied, invalid token');
        return;
    }
};

export default verifyToken;
