import { Order, OrderModel } from '../../models/order';

const order = new OrderModel();

describe('Order', () => {
    const orderTest: Order = {
        status: 'pending',
        user_id: 1,
    };
    it('should be defined', () => {
        expect(OrderModel).toBeDefined();
    });
    it('should be defined', () => {
        expect(order).toBeDefined();
    });
    it('should have index method', () => {
        expect(order.index).toBeDefined();
    });
    it('should have create method', () => {
        expect(order.create).toBeDefined();
    });
    it('should create an order', async () => {
        const result = await order.create(orderTest);
        expect(result).toBeDefined();
    });
    it('should return an order', async () => {
        const result = await order.index(1);
        expect(result).toBeDefined();
    });
});
