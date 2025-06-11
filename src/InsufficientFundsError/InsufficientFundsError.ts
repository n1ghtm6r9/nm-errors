import { BaseError } from '../BaseError';

export class InsufficientFundsError extends BaseError {
  public static readonly code = 'INSUFFICIENT_FUNDS';
  public readonly silent = true;

  constructor() {
    super('Insufficient funds!');
  }
}
