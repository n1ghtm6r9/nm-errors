import { BaseError } from '../BaseError';

export class InvalidCredentialsError extends BaseError {
  public static readonly code = 'INVALID_CREDENTIALS_ERROR';
  public readonly statusCode = 401;

  constructor() {
    super('Invalid credentials!');
  }
}
