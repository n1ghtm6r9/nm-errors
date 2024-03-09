import { INotFoundErrorOptionsSearch } from './INotFoundErrorOptionsSearch';

export interface INotFoundErrorOptions {
  entityName: string;
  search?: INotFoundErrorOptionsSearch[];
}
