import { BaseError } from '../BaseError';

export class AlreadyExistError extends BaseError {
  public static readonly code = 'ALREADY_EXIST_ERROR';
  public readonly statusCode = 409;

  constructor() {
    super('Already exist!');
  }
}
