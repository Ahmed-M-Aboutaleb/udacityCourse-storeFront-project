import client from '../db';

export type Product = {
    id?: number;
    name: string;
    price: number;
};

export class ProductModel {
    async index(): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products';
            const result = await conn.query(sql);
            conn.release();
            return result.rows;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    async show(id: number): Promise<Product> {
        try {
            const conn = await client.connect();
            const sql = 'SELECT * FROM products WHERE id = $1';
            const result = await conn.query(sql, [id]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return {} as Product;
        }
    }
    async create(product: Product): Promise<Product> {
        try {
            const conn = await client.connect();
            const sql =
                'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *';
            const result = await conn.query(sql, [product.name, product.price]);
            conn.release();
            return result.rows[0];
        } catch (error) {
            console.log(error);
            return {} as Product;
        }
    }
}
