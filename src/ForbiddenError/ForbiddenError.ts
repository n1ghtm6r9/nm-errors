import { BaseError } from '../BaseError';

export class ForbiddenError extends BaseError {
  public static readonly code = 'FORBIDDEN_ERROR';
  public readonly statusCode = 403;
  public readonly silent = true;

  constructor(message?: string) {
    super(message || 'Forbidden');
  }
}
