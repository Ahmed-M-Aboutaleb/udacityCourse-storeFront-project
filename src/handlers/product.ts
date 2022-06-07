import { Request, Response } from 'express';
import { Product, ProductModel } from '../models/product';

const Product = new ProductModel();

export const productIndex = async (_req: Request, res: Response) => {
    const products = await Product.index();
    res.json(products);
};

export const productShow = async (_req: Request, res: Response) => {
    const id = parseInt(_req.params.id);
    if (!id) {
        res.status(400).json({
            error: 'Invalid id :(',
        });
        return;
    }
    const product = await Product.show(id);
    res.json(product);
};

export const productCreate = async (req: Request, res: Response) => {
    const product: Product = {
        name: req.body.name,
        price: parseFloat(req.body.price),
    };

    if (!product.name || !product.price) {
        res.status(400).json({
            error: 'Invalid name or price :(',
        });
        return;
    }
    const newProduct = await Product.create(product);
    res.json(newProduct);
};
