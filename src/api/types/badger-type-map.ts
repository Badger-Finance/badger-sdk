import { BadgerType } from '../enums/badger-type.enum';

export type BadgerTypeMap = {
  [key in BadgerType]: number;
};
