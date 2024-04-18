/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sequelize, Options, Dialect } from 'sequelize';
import model from './models';
import AppConfig from '../../config';
import Associations from './associations';
const { DATABASE: { name, username, password, options } } = AppConfig;

interface Database {
  [key: string]: any
  sequelize?: any
  Sequelize?: any
  associations?: typeof Associations
}

let database: Database = {};

const sequelizeOptions: Options = {
  ...options,
  dialect: options.dialect as Dialect
};

const sequelize = new Sequelize(name, username, password, sequelizeOptions);

database = model(sequelize, Sequelize);

database.sequelize = sequelize;
database.Sequelize = Sequelize;
database.associations = Associations;

database.authenticate = async () => { await sequelize.authenticate(); };

export default database;
