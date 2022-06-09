import client from '../db';

export type Order = {
    id?: number;
    status: string;
    user_id: number;
};

export class OrderModel {
    async index(): Promise<Order[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM orders';
            const result = await conn.query(sql);
            conn.release();
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async create(order: Order): Promise<Order> {
        try {
            const conn = await client.connect();
            const sql =
                'INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [order.status, order.user_id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return {} as Order;
        }
    }
}
