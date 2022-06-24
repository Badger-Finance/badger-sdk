import { BigNumber } from 'ethers';

import { TokenActionOptions } from '../../tokens';

export interface IbBtcActionOptions extends TokenActionOptions {
  token: string;
  amount: BigNumber;
  slippage?: number;
}
