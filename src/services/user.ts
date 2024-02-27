import { IUserService, IUserCreate } from "src/interfaces";
import Container, { Service as DIService } from "typedi";
import Helpers from "../utils/helpers";
import Database from "../database";

@DIService()
class UserServices implements IUserService{
  private helpers: Helpers;
  private userModel;

  constructor() {
    this.helpers = Container.get(Helpers);
    const { sequelize: { models: { user } } }= Database;

    this.userModel = user;
  }

  public  create = async (payload: IUserCreate) => {

    const { firstName, lastName, email, password } = payload;

    const user = await this.userModel.findOne({ where: { email } });

    if (user) {
      return { errors: [ { name: 'user', message: 'User already exists' } ] };
    }

    const { salt, hash }: HashPassword = this.helpers.hashPassword(password);
    const passwordValidity = this.helpers.generateValidityDate(90);

    const response = await this.userModel.create({
      first_name: firstName,
      last_name: lastName,
      email,
      hashed_password: hash,
      salt,
      password_validity: passwordValidity,
    });

    if (!response) {
      return { errors: [ { name: 'user', message: 'User not created' } ] };
    }

    const { dataValues: { public_id: publicId } } = response;

    return { doc: { publicId } };
  }

  public  getList = async (payload: object) => {
    return { doc: payload };
  }

  public  getDetailsById = async (payload: object) => {
    return { doc: payload };
  }

  public  update = async (payload: object) => {
    return { doc: payload };
  }
}

export default UserServices;