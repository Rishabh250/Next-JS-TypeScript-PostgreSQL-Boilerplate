import Joi from 'joi';
import AppConstants from '../../utils/constant'

const { PASSWORD_PATTERN } = AppConstants;

export const create = Joi.object({
  userId: Joi.string().min(0).max(255).optional(),
  firstName: Joi.string().min(1).max(255).required().messages({
    'any.required': 'First name is required',
    'string.empty': 'First name cannot be empty',
    'string.min': 'First name must be at least 1 character long',
    'string.max': 'First name must be at most 255 characters long',
  }),
  lastName: Joi.string().min(1).max(255).required().messages({
    'any.required': 'Last name is required',
    'string.empty': 'Last name cannot be empty',
    'string.min': 'Last name must be at least 1 character long',
    'string.max': 'Last name must be at most 255 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email must be a valid email',
  }),
  password: Joi.string().min(6).max(255).pattern(PASSWORD_PATTERN).required().messages({
    'any.required': 'Password is required',
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password must be at least 6 characters long',
    'string.max': 'Password must be at most 255 characters long',
    'string.pattern.base': 'Password must have at least one uppercase, one lowercase letter and one special character',
  }),
  googleId: Joi.string().allow(null, ''),
}).options({ abortEarly: false });

