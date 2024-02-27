import UserServices from '../services/user';
import { IUserCreate } from "src/interfaces";
import Helpers from "../utils/helpers";
import Database from "../database";
import Container from 'typedi';

jest.mock('../utils/helpers', () => {
  return jest.fn().mockImplementation(() => {
    return {
      hashPassword: jest.fn().mockReturnValue({ salt: 'salt', hash: 'hash' }),
      generateValidityDate: jest.fn(),
    };
  });
});

jest.mock('../database', () => ({
  sequelize: {
    models: {
      user: {
        findOne: jest.fn(),
        create: jest.fn(),
      },
    },
  },
}));

Container.set(Helpers, new Helpers());

describe('UserServices', () => {
  let userService: UserServices;
  let helpers: jest.Mocked<Helpers>;
  let userModel: {
    findOne: jest.Mock;
    create: jest.Mock;
  };

  beforeEach(() => {
    helpers = new Helpers() as jest.Mocked<Helpers>;
    userModel = Database.sequelize.models.user;

    helpers.hashPassword.mockReturnValue({ salt: 'salt', hash: 'hash' });
    helpers.generateValidityDate.mockReturnValue(new Date());

    userModel.findOne.mockResolvedValue(null);
    userModel.create.mockResolvedValue({ dataValues: { public_id: 'publicId' } });

    userService = new UserServices();
  });

  it('should create a new user', async () => {
    const payload: IUserCreate = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    const result = await userService.create(payload);

    expect(Database.sequelize.models.user.findOne).toHaveBeenCalledWith({
      where: { email: payload.email },
    });
    expect(Database.sequelize.models.user.create).toHaveBeenCalledWith(expect.any(Object));
    expect(result).toEqual({ doc: { publicId: 'publicId' } });
  });
  test('should return error if user already exists', async () => {
    const payload: IUserCreate = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    userModel.findOne.mockResolvedValue({ email: payload.email });

    const result = await userService.create(payload);
    let errMsg;

    if (result.errors) {
      const [ error ] = result.errors;

      const { message } = error;

      errMsg = message;
    }

    expect(errMsg).toBeDefined();
    expect(errMsg).toBe('User already exists');
  });


});
