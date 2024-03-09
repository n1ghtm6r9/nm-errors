import { RpcException } from '@nestjs/microservices';
import { IBaseErrorOptions } from './interfaces';

export abstract class BaseError extends RpcException {
  public static readonly code: string;
  public readonly code: string;

  constructor(options: IBaseErrorOptions) {
    super({
      status: 'error',
      ...options,
    });
    this.code = options.code;
  }
}
