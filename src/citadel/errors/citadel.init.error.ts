import { CITADEL_INIT_ERR_CODE } from './citadel.error.constants';

export class CitadelInitError extends Error {
  code: number;

  constructor(msg: string) {
    super(msg);

    this.message = msg;
    this.code = CITADEL_INIT_ERR_CODE;
  }
}
