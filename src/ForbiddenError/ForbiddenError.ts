import { BaseError } from '../BaseError';

export class ForbiddenError extends BaseError {
  public static readonly code = 'FORBIDDEN_ERROR';
  constructor() {
    super({
      code: ForbiddenError.code,
      message: 'Forbidden',
    });
  }
}
