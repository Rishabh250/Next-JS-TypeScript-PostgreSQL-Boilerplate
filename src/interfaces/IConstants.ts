interface IConstants {
    RESPONSE_ERROR: {
      INTERNAL_SERVER_ERROR: string;
      VALIDATION_ERROR: string;
      SERVER_ERROR: string;
      NOT_AUTHORIZED: string;
      NOT_FOUND: string;
      FORBIDDEN: string;
      SERVICE_ERROR: string;
    };
    ERROR: string;
    STATUS_CODE: {
      OK: number;
      CREATED: number;
      UPDATED: number;
      BAD_REQUEST: number;
      UNAUTHORIZED: number;
      FORBIDDEN: number;
      NOT_FOUND: number;
      SERVER_ERROR: number;
    };
    PASSWORD_PATTERN: RegExp;
    HEADERS: {
      PUBLIC_ID: string;
      TOTAL_RECORDS: string;
      TOTAL_PAGES: string;
      PAGE: string;
      LIMIT: string;
      ACCESS_TOKEN: string;
      REFRESH_TOKEN: string;
    };
    SALT: string;
    SHA_256: string;
    SHA_512: string;
    PASSWORD_KEY_LENGTH: number;
    PASSWORD_ITERATIONS: number;
    }

export default IConstants;