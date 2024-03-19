import { BaseError } from '../BaseError';

export class CustomError extends BaseError {
  public static readonly code = 'CUSTOM_ERROR';
  public readonly statusCode = 500;

  constructor(message: string) {
    super(message);
  }
}
