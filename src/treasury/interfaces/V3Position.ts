import { BigNumberish } from '@ethersproject/bignumber';

export interface V3Postion {
  token0: string;
  token1: string;
  liqudity: BigNumberish;
  feeGrowthInside0LastX128: BigNumberish;
  feeGrowthInside1LastX128: BigNumberish;
  tokensOwed0: BigNumberish;
  tokensOwed1: BigNumberish;
}
