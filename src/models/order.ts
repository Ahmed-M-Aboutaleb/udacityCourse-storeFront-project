import client from '../db';

export type Order = {
    id?: number;
    status: string;
    user_id: number;
};

export class OrderModel {
    async index(id: number): Promise<Order[]> {
        const conn = await client.connect();
        const sql = 'SELECT * FROM orders WHERE user_id = $1';
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
    }
    async create(order: Order): Promise<Order> {
        const conn = await client.connect();
        const sql =
            'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
        const result = await conn.query(sql, [order.status, order.user_id]);
        conn.release();
        return result.rows[0];
    }
}
