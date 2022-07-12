import { BigNumber } from 'ethers';

export interface VaultCaps {
  totalDepositCap: BigNumber;
  remainingDepositCap: BigNumber;
  userDepositCap: BigNumber;
  remainingUserDepositCap: BigNumber;
}
