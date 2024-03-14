import { BaseError } from '../BaseError';

export class UnauthorizedError extends BaseError {
  public static readonly code = 'UNAUTHORIZED_ERROR';
  constructor() {
    super({
      code: UnauthorizedError.code,
      message: 'Unauthorized',
    });
  }
}
