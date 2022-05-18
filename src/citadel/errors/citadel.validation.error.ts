import { CITADEL_VALIDATION_ERR_CODE } from './citadel.error.constants';

export class CitadelValidationError extends Error {
  code: number;

  constructor(msg: string) {
    super(msg);

    this.message = msg;
    this.code = CITADEL_VALIDATION_ERR_CODE;
  }
}
