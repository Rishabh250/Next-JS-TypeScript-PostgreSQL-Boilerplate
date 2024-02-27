import { IConstants } from 'src/interfaces';

const CONSTANTS: IConstants = {
  RESPONSE_ERROR: {
    INTERNAL_SERVER_ERROR: 'Internal server error',
    VALIDATION_ERROR: 'Validation error',
    SERVER_ERROR: 'Server error',
    NOT_AUTHORIZED: 'Not authorized',
    NOT_FOUND: 'Not found',
    FORBIDDEN: 'Forbidden',
    SERVICE_ERROR: 'Service error',
  },
  ERROR: 'error',
  STATUS_CODE: {
    OK: 200,
    CREATED: 201,
    UPDATED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  },
  PASSWORD_PATTERN: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+-]).+$'),
  HEADERS: {
    PUBLIC_ID: 'public_id',
    TOTAL_RECORDS: 'total_records',
    TOTAL_PAGES: 'total_pages',
    PAGE: 'page',
    LIMIT: 'limit',
    ACCESS_TOKEN: 'access-token',
    REFRESH_TOKEN: 'refresh-token',
  },
  SALT: '10',
  SHA_256: 'sha256',
  SHA_512: 'sha512',
  PASSWORD_KEY_LENGTH: 64,
  PASSWORD_ITERATIONS: 10000,
};

export default CONSTANTS;
