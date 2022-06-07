import { ProductModel } from '../../models/product';

const product = new ProductModel();

describe('Product', () => {
    const productTest = {
        name: 'Product Test',
        price: 10,
    };
    it('should be defined', () => {
        expect(ProductModel).toBeDefined();
    });
    it('should be defined', () => {
        expect(product).toBeDefined();
    });
    it('should have create method', () => {
        expect(product.create).toBeDefined();
    });
    it('should have index method', () => {
        expect(product.index).toBeDefined();
    });
    it('should have show method', () => {
        expect(product.show).toBeDefined();
    });
    it('should return a product', async () => {
        const result = await product.create(productTest);
        expect(result).toBeDefined();
        expect(result.name).toBe('Product Test');
    });
    it('should return an array of products', async () => {
        const result = await product.index();
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
    });
    it('should return a product', async () => {
        const result = await product.show(1);
        expect(result).toBeDefined();
        expect(result.id).toBe(1);
    });
});
