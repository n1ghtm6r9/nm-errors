import { BaseError } from '../BaseError';

export class ServiceNotAvailableError extends BaseError {
  public static readonly code = 'SERVICE_NOT_AVAILABLE_ERROR';
  constructor(serviceName: string, route: string) {
    super(`Service "${serviceName}" route "${route}" not available.`);
  }
}
