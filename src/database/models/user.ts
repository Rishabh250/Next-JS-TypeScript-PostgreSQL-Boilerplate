import { UUID } from 'crypto';
import { Sequelize, Model, DataTypes } from 'sequelize';

interface UserAttributes {
    public_id: UUID;
    first_name: string;
    last_name: string;
    email: string;
    hashed_password: string;
    google_id?: string;
    salt: string;
    password_validity: Date;
    created_by?: UUID;
    updated_by?: UUID;
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export default  (sequelize: Sequelize) => {
  const User = sequelize.define<UserInstance>('user', {
    public_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    google_id: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_validity: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.UUID,
    },
    updated_by: {
      type: DataTypes.UUID,
    }
  },{ freezeTableName: true, underscored: true, timestamps: true });

  return User;
};