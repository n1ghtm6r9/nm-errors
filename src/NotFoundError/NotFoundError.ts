import { BaseError } from '../BaseError';
import { INotFoundErrorOptions } from './interfaces';

export class NotFoundError extends BaseError {
  public static readonly code = 'NOT_FOUND_ERROR';
  public readonly statusCode = 404;

  constructor(options: INotFoundErrorOptions) {
    super(
      `${options.entityName.charAt(0).toUpperCase()}${options.entityName.slice(1)} is not found!${
        options.search?.length ? `\n${options.search?.map(v => `${v.field}:${v.value}`)?.join('\n')}}` : ''
      }`,
    );
  }
}
