import { BaseError } from './BaseError';

export class NotFoundError extends BaseError {
  public static readonly code = 'NOT_FOUND_ERROR';
  constructor(options: { entityName: string; searchValue: string }) {
    super({
      code: NotFoundError.code,
      message: `${options.entityName.charAt(0).toUpperCase()}${options.entityName.slice(1)} "${options.searchValue}" is not found!`,
    });
  }
}
