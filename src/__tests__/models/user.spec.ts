import { UserModel } from '../../models/user';

const user = new UserModel();

describe('User', () => {
    const userTest = {
        firstname: 'User',
        lastname: 'Test',
        password: 'testHashedBlalala145454',
    };
    it('should be defined', () => {
        expect(UserModel).toBeDefined();
    });
    it('should be defined', () => {
        expect(user).toBeDefined();
    });
    it('should have create method', () => {
        expect(user.create).toBeDefined();
    });
    it('should have index method', () => {
        expect(user.index).toBeDefined();
    });
    it('should have show method', () => {
        expect(user.show).toBeDefined();
    });
    it('should return a user', async () => {
        const result = await user.create(userTest);
        expect(result).toBeDefined();
        expect(result.firstname).toBe('User');
    });
    it('should return an array of user', async () => {
        const result = await user.index();
        expect(result).toBeDefined();
        expect(result.length).toBeGreaterThan(0);
    });
    it('should return a user', async () => {
        const result = await user.show(1);
        expect(result).toBeDefined();
        expect(result.id).toBe(1);
    });
});
