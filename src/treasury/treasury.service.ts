import { BigNumber, CallOverrides, ethers } from 'ethers';
import { TokenConfiguration } from '../api';
import {
  BaseRewardPool__factory,
  Erc20__factory,
  StakedTokenIncentivesController__factory,
  VirtualBalanceRewardPool__factory,
} from '../contracts';
import { Service } from '../service';
import { BalanceSummary } from './interfaces/balanceSummary';

export class TreasuryService extends Service {
  async loadHistoricBalance(
    tokenAddress: string,
    holderAddress: string,
    blockTag?: CallOverrides,
  ): Promise<BigNumber> {
    try {
      const checksumAddress = ethers.utils.getAddress(tokenAddress);
      const token = Erc20__factory.connect(checksumAddress, this.provider);
      return token.balanceOf(holderAddress, blockTag);
    } catch (err) {
      console.error(err);
      return BigNumber.from(0);
    }
  }
  async loadAaveRewards(
    holderAddress: string,
    blockTag?: CallOverrides,
  ): Promise<BigNumber> {
    if (blockTag === undefined) {
      blockTag = { blockTag: 'latest' };
    }
    let aaveAddress = '0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5';
    aaveAddress = ethers.utils.getAddress(aaveAddress);
    const aave = StakedTokenIncentivesController__factory.connect(
      aaveAddress,
      this.provider,
    );
    // const rewards: BalanceSummary[] = [];
    const unclaimedRewards = await aave.getUserUnclaimedRewards(holderAddress);
    console.log('test');
    console.log('unclaimedRewards', unclaimedRewards);
    return unclaimedRewards;
  }
  async loadConvexRewards(
    rewardAddress: string,
    holderAddress: string,
    blockTag?: CallOverrides,
  ): Promise<BalanceSummary[]> {
    const checksumAddress = ethers.utils.getAddress(rewardAddress);
    const baseReward = BaseRewardPool__factory.connect(
      checksumAddress,
      this.provider,
    );
    if (blockTag === undefined) {
      blockTag = { blockTag: 'latest' };
    }
    const rewards: BalanceSummary[] = [];

    const [balance, poolBalance, tokenAddress, extraRewardsLength] =
      await Promise.all([
        baseReward.earned(holderAddress, blockTag),
        baseReward.balanceOf(holderAddress, blockTag),
        baseReward.rewardToken(blockTag),
        baseReward.extraRewardsLength(blockTag),
      ]);
    rewards.push({ tokenAddress, holderAddress, balance });
    if (extraRewardsLength.gt(0)) {
      for (let i = 0; i < extraRewardsLength.toNumber(); i++) {
        const extraReward = await baseReward.extraRewards(i);
        const virtualBalancePool = VirtualBalanceRewardPool__factory.connect(
          extraReward,
          this.provider,
        );
        const [tokenAddress, balance] = await Promise.all([
          virtualBalancePool.rewardToken(),
          virtualBalancePool.balanceOf(holderAddress),
        ]);
        rewards.push({
          tokenAddress,
          holderAddress,
          balance,
        });
      }
    }
    return rewards;
  }
  async loadHistoricBalances(
    blockTag?: CallOverrides,
  ): Promise<BalanceSummary[]> {
    if (blockTag === undefined) {
      blockTag = { blockTag: 'latest' };
    }
    const tokens = await this.sdk.api.loadTokens();
    const addresses = this.loadTreasuryAddresses();
    const holderAddress = addresses.dev_multisig;
    const balanceEntries = await this.historicBalances(
      tokens,
      holderAddress,
      blockTag,
    );
    console.log(balanceEntries[0]);
    return balanceEntries;
  }

  private async historicBalances(
    tokens: TokenConfiguration,
    holderAddress: string,
    blockTag: CallOverrides | undefined,
  ) {
    return await Promise.all(
      Object.keys(tokens).map(async (tokenAddress) => {
        const balance = await this.loadHistoricBalance(
          tokenAddress,
          holderAddress,
          blockTag,
        );
        return { tokenAddress, holderAddress, balance };
      }),
    );
  }
  //TODO: move to service
  loadConvexRewardAddresses(): string[] {
    return [
      '0x689440f2Ff927E1f24c72F1087E1FAF471eCe1c8',
      '0xB900EF131301B307dB5eFcbed9DBb50A3e209B2e',
      '0x4a9b7eDD67f58654a2c33B587f98c5709AC7d482',
    ];
  }
  loadTreasuryAddresses() {
    const TreasuryAddresses = {
      dev_multisig: '0xB65cef03b9B89f99517643226d76e286ee999e77',
      devtest_multisig: '0x33909cb2633d4B298a72042Da5686B45E9385ed0',
      test_multisig_1: '0x55949f769d0af7453881435612561d109fff07b8',
      test_multisig: '0x33909cb2633d4B298a72042Da5686B45E9385ed0',
      techops_multisig: '0x86cbD0ce0c087b482782c181dA8d191De18C8275',
      politician_multisig: '0x6F76C6A1059093E21D8B1C13C4e20D8335e2909F',
      recovered_multisig: '0x9faA327AAF1b564B569Cb0Bc0FDAA87052e8d92c',
      ops_multisig: '0xD4868d98849a58F743787c77738D808376210292',
      ops_multisig_old: '0x576cD258835C529B54722F84Bb7d4170aA932C64',
      treasury_ops_multisig: '0x042B32Ac6b453485e357938bdC38e0340d4b9276',
      treasury_vault_multisig: '0xD0A7A8B98957b9CD3cFB9c0425AbE44551158e9e',
      ibbtc_multisig: '0xB76782B51BFf9C27bA69C77027e20Abd92Bcf3a8',
    };
    return TreasuryAddresses;
  }
  loadTreasuryTokens() {
    const TreasuryTokens = {
      FARM: '0xa0246c9032bC3A600820415aE600c6388619A14D',
      BADGER: '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
      ibBTC: '0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F',
      wibBTC: '0x8751D4196027d4e6DA63716fA7786B5174F04C15',
      DIGG: '0x798D1bE841a82a273720CE31c822C61a67a601C3',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      aUSDC: '0xBcca60bB61934080951369a648Fb03DF4F96263C',
      cUSDC: '0x39aa39c021dfbae8fac545936693ac917d5e7563',
      cETH: '0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5',
      DUSD: '0x5BC25f649fc4e26069dDF4cF4010F9f706c23831',
      alUSD: '0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9',
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      MIM: '0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3',
      FRAX: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
      DFD: '0x20c36f062a31865bED8a5B1e512D9a1A20AA333A',
      CRV: '0xD533a949740bb3306d119CC777fa900bA034cd52',
      WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      renBTC: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
      sBTC: '0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6',
      WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      SUSHI: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
      GTC: '0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F',
      bDIGG: '0x7e7E112A68d8D2E221E11047a72fFC1065c38e1a',
      bBADGER: '0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28',
      xSUSHI: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
      COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
      AAVE: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
      stkAAVE: '0x4da27a545c0c5B758a6BA100e3a049001de870f5',
      SPELL: '0x090185f2135308bad17527004364ebcc2d37e5f6',
      ALCX: '0xdbdb4d16eda451d0503b854cf79d55697f90c8df',
      FXS: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      crvRenBTC: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
      crvSBTC: '0x075b1bb99792c9E1041bA13afEf80C91a1e70fB3',
      crvTBTC: '0x64eda51d3Ad40D56b9dFc5554E06F94e1Dd786Fd',
      slpWbtcEth: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
      slpWbtcBadger: '0x110492b31c59716ac47337e616804e3e3adc0b4a',
      uniWbtcBadger: '0xcd7989894bc033581532d2cd88da5db0a4b12859',
      uniWbtcDigg: '0xe86204c4eddd2f70ee00ead6805f917671f56c52',
      slpWbtcDigg: '0x9a13867048e01c663ce8ce2fe0cdae69ff9f35e3',
      slpWbtcibBTC: '0x18d98D452072Ac2EB7b74ce3DB723374360539f1',
      slpEthBBadger: '0x0a54d4b378c8dbfc7bc93be50c85debafdb87439',
      slpEthBDigg: '0xf9440fedc72a0b8030861dcdac39a75b544e7a3c',
      crvHBTC: '0xb19059ebb43466C323583928285a49f558E572Fd',
      crvBBTC: '0x410e3E86ef427e30B9235497143881f717d93c2A',
      crvOBTC: '0x2fE94ea3d5d4a175184081439753DE15AeF9d614',
      crvPBTC: '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8',
      crvIbBTC: '0xFbdCA68601f835b27790D98bbb8eC7f05FDEaA9B',
      crvTricrypto: '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF',
      crvTricrypto2: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
      crv3pool: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',
      crvMIM: '0x5a6A4D54456819380173272A5E8E9B9904BdF41B',
      crvALUSD: '0x43b4FdFD4Ff969587185cDB6f0BD875c5Fc83f8c',
      crvFRAX: '0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B',
      CVX: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
      cvxCRV: '0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7',
      bcvxCRV: '0x2B5455aac8d64C14786c3a29858E43b5945819C0',
      bCVX: '0x53c8e199eb2cb7c01543c137078a038937a68e40',
      bcrvRenBTC: '0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545',
      bcrvSBTC: '0xd04c48A53c111300aD41190D63681ed3dAd998eC',
      bcrvTBTC: '0xb9D076fDe463dbc9f915E5392F807315Bf940334',
      bveCVX: '0xfd05D3C7fe2924020620A8bE4961bBaA747e6305',
      yvWBTC: '0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E',
      aBADGER: '0x43298F9f91a4545dF64748e78a2c777c580573d6',
      badgerWBTC_f: '0x137469B55D1f15651BA46A89D0588e97dD0B6562',
      EURS: '0xdB25f211AB05b1c97D595516F45794528a807ad8',
      crv3eur: '0xb9446c4Ef5EBE66268dA6700D26f96273DE3d571',
      bveCVXCVX_f: '0x04c90C198b2eFF55716079bc06d7CCc4aa4d7512',
      FTM: '0x4E15361FD6b4BB609Fa63C81A2be19d873717870',
    };
    return TreasuryTokens;
  }
}
