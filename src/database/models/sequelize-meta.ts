import { Sequelize, Model, DataTypes } from 'sequelize';

interface SequelizeMetaAttributes {
  name: string
}

interface SequelizeMetaInstance extends Model<SequelizeMetaAttributes>, SequelizeMetaAttributes {}

export default (sequelize: Sequelize) => {
  const SequelizeMeta = sequelize.define<SequelizeMetaInstance>(
    'SequelizeMeta',
    { name: DataTypes.STRING },
    { freezeTableName: true, underscored: true }
  );

  return SequelizeMeta;
};
