import { BaseError } from '../BaseError';

export class UnauthorizedError extends BaseError {
  public static readonly code = 'UNAUTHORIZED_ERROR';
  public readonly statusCode = 401;

  constructor() {
    super('Unauthorized');
  }
}
