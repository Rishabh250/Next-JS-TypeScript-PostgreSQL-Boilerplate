import crypto from 'crypto';
import AppConstants from '../utils/constant'
import { Service as DIService } from 'typedi';

const { SALT, PASSWORD_ITERATIONS, PASSWORD_KEY_LENGTH, SHA_256 } = AppConstants;

@DIService()
class Helpers{
  public hashPassword = (password: string) => {
    const salt = crypto.randomBytes(Number(SALT)).toString('hex');
    const hash = crypto.pbkdf2Sync(password, SALT, PASSWORD_ITERATIONS, PASSWORD_KEY_LENGTH, SHA_256).toString('hex');

    return { salt, hash };
  };

  public generateValidityDate = (days: number) => {
    const date = new Date();

    date.setDate(date.getDate() + days);

    return date;
  }
}

export default Helpers;