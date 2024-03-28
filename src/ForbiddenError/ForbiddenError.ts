import { BaseError } from '../BaseError';

export class ForbiddenError extends BaseError {
  public static readonly code = 'FORBIDDEN_ERROR';
  public readonly statusCode = 403;

  constructor(message?: string) {
    super(message || 'Forbidden');
  }
}
