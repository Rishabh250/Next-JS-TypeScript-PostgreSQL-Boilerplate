import * as dotenv from 'dotenv';
import { version, name } from '../package.json';

dotenv.config({ path: './.env.local' });

interface DatabaseConfig {
  name: string
  username: string
  password: string
  options: {
    host: string
    port: number
    dialect: string
    freezeTableName: boolean
    define: {
      timestamps: boolean
      charset: string
      collate: string
    }
    pool: {
      max: number
      min: number
      acquire: number
      idle: number
    }
    dialectOptions: {
      decimalNumbers: boolean
      charset: string
    }
    logging: boolean
  }

}

interface AppConfig {
  VERSION: string
  NAME: string
  DOMAIN: string
  HOST: string
  PORT: number
  DATABASE: DatabaseConfig
}

const config: AppConfig = {
  VERSION: process.env.VERSION ?? version,
  NAME: process.env.NAME ?? name,
  DOMAIN: process.env.DOMAIN ?? 'http://localhost:3000',
  HOST: process.env.HOST ?? '0.0.0.0',
  PORT: parseInt(process.env.PORT ?? '3000', 10),
  DATABASE: {
    name: process.env.DB_NAME ?? 'blogs_local',
    username: process.env.DB_USER_NAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? '1234',
    options: {
      host: process.env.DB_HOST ?? 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      dialect: 'postgres',
      freezeTableName: true,
      define: {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 30 * 1000,
        idle: 10000
      },
      dialectOptions: {
        decimalNumbers: true,
        charset: 'utf8mb4'
      },
      logging: false
    }
  }
};

export default config;
