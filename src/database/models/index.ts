/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';

const basename = path.basename(__filename);

interface Db {
  [key: string]: any
  sequelize?: Sequelize
  Sequelize?: typeof Sequelize
}

const db: Db = {};

const model = async (sequelize: Sequelize, Sequelize: any) => {
  fs.readdirSync(__dirname).filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
  }).forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, Sequelize);

    db[model.name] = model;
  });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
};

export default model;
