import { BaseError } from './BaseError';

export class ServiceNotAvailableError extends BaseError {
  public static readonly code = 'SERVICE_NOT_AVAILABLE_ERROR';
  constructor(serviceName: string, route: string) {
    super({
      code: ServiceNotAvailableError.code,
      message: `Service "${serviceName}" route "${route}" not available.`,
    });
  }
}
