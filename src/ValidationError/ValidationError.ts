import { BaseError } from '../BaseError';

export class ValidationError extends BaseError {
  public static readonly code = 'VALIDATION_ERROR';
  public readonly statusCode = 400;

  constructor(path: string) {
    super(`Field "${path}" is invalid!`);
  }
}
