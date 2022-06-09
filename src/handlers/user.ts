import { Request, Response } from 'express';
import { genSaltSync, hashSync } from 'bcrypt';
import { User, UserModel } from '../models/user';
import { sign } from 'jsonwebtoken';

const User = new UserModel();

export const userIndex = async (_req: Request, res: Response) => {
    try {
        const users = await User.index();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const userShow = async (_req: Request, res: Response) => {
    const id = parseInt(_req.params.id);
    if (!id) {
        res.status(400).json({
            error: 'Invalid id :(',
        });
        return;
    }
    try {
        const user = await User.show(id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const userCreate = async (req: Request, res: Response) => {
    const user: User = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: req.body.password,
    };
    const saltRounds = 10;
    if (
        !user.firstname ||
        !user.lastname ||
        !user.password ||
        typeof user.password !== 'string'
    ) {
        res.status(400).json({
            error: 'Invalid name or password :(',
        });
        return;
    }
    try {
        const salt = await genSaltSync(saltRounds);
        const hash = await hashSync(user.password, salt);
        user.password = hash;
        const newUser = await User.create(user);
        let tokenPayload = {
            user_id: newUser.id,
        };
        let token = sign(tokenPayload, process.env.JWT_SECRET as string);
        res.json(token);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'There is error with the server :(' });
    }
};
