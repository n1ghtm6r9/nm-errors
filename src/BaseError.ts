import { RpcException } from '@nestjs/microservices';

export abstract class BaseError extends RpcException {
  public static readonly code: string;
  public readonly code: string;

  constructor(params: { message: string; code: string }) {
    super({
      status: 'error',
      ...params,
    });
    this.code = params.code;
  }
}
