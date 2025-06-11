import { BaseError } from '../BaseError';

export class InvalidCredentialsError extends BaseError {
  public static readonly code = 'INVALID_CREDENTIALS_ERROR';
  public readonly statusCode = 401;
  public readonly silent = true;

  constructor() {
    super('Invalid credentials!');
  }
}
