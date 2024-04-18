import { Sequelize } from 'sequelize';
import UserModel from './models/user';
import BasicProfileModel from './models/basic-profile';

const modelsAssociatioms = (sequelize: Sequelize): void => {
  const User = UserModel(sequelize);
  const BasicProfile = BasicProfileModel(sequelize);

  User.hasOne(BasicProfile, {
    foreignKey: 'user_id',
    as: 'basicProfile'
  });

  BasicProfile.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });
};

export default modelsAssociatioms;
