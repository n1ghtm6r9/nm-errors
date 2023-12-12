import { BaseError } from './BaseError';

export class CustomError extends BaseError {
  public static readonly code = 'CUSTOM_ERROR';
  constructor(message: string) {
    super({
      code: CustomError.code,
      message,
    });
  }
}
