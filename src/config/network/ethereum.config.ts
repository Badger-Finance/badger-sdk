import { Network } from '../enums/network.enum';
import { NetworkConfig } from './network.config';
import { checksumEntries } from './network.utils';

export class EthereumConfig extends NetworkConfig {
  constructor() {
    super('Ethereum', Network.Ethereum, 1, tokens, setts);
  }
}

const tokens = checksumEntries({
  // eth tokens
  BADGER: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
  DIGG: '0x798d1be841a82a273720ce31c822c61a67a601c3',
  WBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  SUSHI: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  XSUSHI: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  FARM: '0xa0246c9032bC3A600820415aE600c6388619A14D',
  IBBTC: '0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F',
  DEFI_DOLLAR: '0x20c36f062a31865bED8a5B1e512D9a1A20AA333A',
  CRV: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  CVX: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
  CVXCRV: '0x62b9c7356a2dc64a1969e19c23e4f579f9810aa7',
  BOR: '0xBC19712FEB3a26080eBf6f2F7849b417FdD792CA',
  BOR_OLD: '0x3c9d6c1C73b31c837832c72E04D3152f051fc1A9',
  PNT: '0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD',
  DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  HBTC: '0x0316EB71485b0Ab14103307bf65a021042c6d380',
  PBTC: '0x5228a22e72ccc52d415ecfd199f99d0665e7733b',
  OBTC: '0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68',
  BBTC: '0x9be89d2a4cd102d8fecc6bf9da793be995c22541',
  TBTC: '0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa',
  RENBTC: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
  SBTC: '0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6',
  KEEP: '0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC',
  DROPT_2: '0x952F4Ac36EF204a28800AA1c1586C5261B600894',
  DROPT_3: '0x68c269b60c58c4ed50c63b217ba0ec7f8a371920',
  MBTC: '0x945Facb997494CC2570096c74b5F66A3507330a1',
  IMBTC: '0x17d8CBB6Bce8cEE970a4027d1198F6700A7a6c24',
  MHBTC: '0x48c59199Da51B7E30Ea200a74Ea07974e62C4bA7',
  MTA: '0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2',

  // curve tokens
  CRV_RENBTC: '0x49849c98ae39fff122806c06791fa73784fb3675',
  CRV_TBTC: '0x64eda51d3ad40d56b9dfc5554e06f94e1dd786fd',
  CRV_SBTC: '0x075b1bb99792c9e1041ba13afef80c91a1e70fb3',
  CRV_HBTC: '0xb19059ebb43466C323583928285a49f558E572Fd',
  CRV_PBTC: '0xDE5331AC4B3630f94853Ff322B66407e0D6331E8',
  CRV_OBTC: '0x2fE94ea3d5d4a175184081439753DE15AeF9d614',
  CRV_BBTC: '0x410e3E86ef427e30B9235497143881f717d93c2A',
  CRV_TRICRYPTO: '0xcA3d75aC011BF5aD07a98d02f18225F9bD9A6BDF',
  CRV_TRICRYPTO2: '0xc4AD29ba4B3c580e6D59105FFf484999997675Ff',
  CRV_THREE: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',

  // uniswap tokens
  UNI_BADGER_WBTC: '0xcd7989894bc033581532d2cd88da5db0a4b12859',
  UNI_DIGG_WBTC: '0xe86204c4eddd2f70ee00ead6805f917671f56c52',

  // sushiswap tokens
  SUSHI_ETH_WBTC: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
  SUSHI_BADGER_WBTC: '0x110492b31c59716ac47337e616804e3e3adc0b4a',
  SUSHI_DIGG_WBTC: '0x9a13867048e01c663ce8ce2fe0cdae69ff9f35e3',
  SUSHI_IBBTC_WBTC: '0x18d98D452072Ac2EB7b74ce3DB723374360539f1',
  SUSHI_CRV_CVXCRV: '0x33F6DDAEa2a8a54062E021873bCaEE006CdF4007',
  SUSHI_CVX_ETH: '0x05767d9EF41dC40689678fFca0608878fb3dE906',
});

const setts = checksumEntries({
  BBADGER: '0x19d97d8fa813ee2f51ad4b4e04ea08baf4dffc28',
  BDIGG: '0x7e7e112a68d8d2e221e11047a72ffc1065c38e1a',
  BUNI_BADGER_WBTC: '0x235c9e24d3fb2fafd58a2e49d454fdcd2dbf7ff1',
  BUNI_DIGG_WBTC: '0xc17078fdd324cc473f8175dc5290fae5f2e84714',
  BSUSHI_ETH_WBTC: '0x758a43ee2bff8230eeb784879cdcff4828f2544d',
  BSUSHI_BADGER_WBTC: '0x1862a18181346ebd9edaf800804f89190def24a5',
  BSUSHI_DIGG_WBTC: '0x88128580acdd9c04ce47afce196875747bf2a9f6',
  BCRV_SBTC: '0xd04c48a53c111300ad41190d63681ed3dad998ec',
  BCRV_RENBTC: '0x6def55d2e18486b9ddfaa075bc4e4ee0b28c1545',
  BCRV_TBTC: '0xb9d076fde463dbc9f915e5392f807315bf940334',
  BCRV_HRENBTC: '0xaf5a1decfa95baf63e0084a35c62592b774a2a87',
  BVYWBTC: '0x4b92d19c11435614cd49af1b589001b7c08cd4d5',
  BSUSHI_IBBTC_WBTC: '0x8a8FFec8f4A0C8c9585Da95D9D97e8Cd6de273DE',
  BZS_DIGG: '0x608b6D82eb121F3e5C0baeeD32d81007B916E83C',
  BCRV_HBTC: '0x8c76970747afd5398e958bdfada4cf0b9fca16c4',
  BCRV_PBTC: '0x55912d0cf83b75c492e761932abc4db4a5cb1b17',
  BCRV_OBTC: '0xf349c0faa80fc1870306ac093f75934078e28991',
  BCRV_BBTC: '0x5dce29e92b1b939f8e8c60dcf15bde82a85be4a9',
  BCRV_TRICRYPTO: '0xBE08Ef12e4a553666291E9fFC24fCCFd354F2Dd2',
  BCRV_TRICRYPTO2: '0x27E98fC7d05f54E544d16F58C194C2D7ba71e3B5',
  BCVX: '0x53c8e199eb2cb7c01543c137078a038937a68e40',
  BCVXCRV: '0x2B5455aac8d64C14786c3a29858E43b5945819C0',
  BRENBTC: '0x58CAc1409F1ffbdcBA6a58d54c94CAC3fb4C6F8B',
  BIMBTC: '0x599D92B453C010b1050d31C364f6ee17E819f193',
  BMHBTC: '0x26B8efa69603537AC8ab55768b6740b67664D518',
  BICVX: '0xfd05D3C7fe2924020620A8bE4961bBaA747e6305',
  BICVX_OLD: '0xE143aA25Eec81B4Fc952b38b6Bca8D2395481377',
});

export const ETH_CONFIG = new EthereumConfig();
