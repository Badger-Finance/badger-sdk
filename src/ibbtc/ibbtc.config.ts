import { checksumAddresses, checksumAddressesMap } from '../utils/checksum';
import { IbBtcZapType } from './enums';

export const ZAP_SUPPORTED_TOKENS: Record<IbBtcZapType, string[]> = {
  [IbBtcZapType.Peak]: checksumAddresses([
    '0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545',
  ]),
  [IbBtcZapType.Vault]: checksumAddresses([
    '0x4b92d19c11435614CD49Af1b589001b7c08cD4D5',
    '0xd04c48A53c111300aD41190D63681ed3dAd998eC',
    '0xb9D076fDe463dbc9f915E5392F807315Bf940334',
    '0x8c76970747afd5398e958bDfadA4cf0B9FcA16c4',
    '0x5Dce29e92b1b939F8E8C60DcF15BDE82A85be4a9',
    '0x55912D0Cf83B75c492E761932ABc4DB4a5CB1b17',
    '0xf349c0faA80fC1870306Ac093f75934078e28991',
  ]),
  [IbBtcZapType.Token]: checksumAddresses([
    '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
  ]),
};

export const ZAP_POOL_IDS = checksumAddressesMap<number>({
  '0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545': 0,
  '0x4b92d19c11435614CD49Af1b589001b7c08cD4D5': 0,
  '0xd04c48A53c111300aD41190D63681ed3dAd998eC': 1,
  '0xb9D076fDe463dbc9f915E5392F807315Bf940334': 2,
  '0x8c76970747afd5398e958bDfadA4cf0B9FcA16c4': 3,
  '0x5Dce29e92b1b939F8E8C60DcF15BDE82A85be4a9': 4,
  '0x55912D0Cf83B75c492E761932ABc4DB4a5CB1b17': 5,
  '0xf349c0faA80fC1870306Ac093f75934078e28991': 6,
});
