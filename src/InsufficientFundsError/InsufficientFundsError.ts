import { BaseError } from '../BaseError';

export class InsufficientFundsError extends BaseError {
  public static readonly code = 'INSUFFICIENT_FUNDS';
  constructor() {
    super('Insufficient funds!');
  }
}
