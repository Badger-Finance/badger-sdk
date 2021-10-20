import { BigNumberish } from '@ethersproject/bignumber';
export interface ClaimOptions {
    index: string;
    cycle: string;
    user: string;
    tokens: string[];
    cumulativeAmounts: string[];
    proof: string[];
    claimAmounts: BigNumberish[];
}
