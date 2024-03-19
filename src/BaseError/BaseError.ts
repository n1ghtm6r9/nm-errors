import { RpcException } from '@nestjs/microservices';

export abstract class BaseError extends RpcException {
  public static readonly code: string;
  public readonly code: string;
  public readonly statusCode?: number;

  constructor(message: string) {
    super({
      status: 'error',
      message,
    });
    this.code = (<any>this.constructor).code;
  }
}
