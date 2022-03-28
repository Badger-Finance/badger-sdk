import { VaultsService } from './vaults.service';
import { BadgerSDK } from '../sdk';
import { VaultVersion } from './enums';
import { Network } from '../config';

describe('vaults.service', () => {
  let sdk: BadgerSDK;

  beforeAll(async () => {
    sdk = new BadgerSDK({
      network: Network.Ethereum,
      provider: 'https://rpc.ftm.tools/',
    });
  });

  describe('getVaultStrategy', () => {
    it('should return v1.5 strategy', async function () {
      const service = new VaultsService(sdk);
      // BVEOXD vault that is v1.5 vault
      const address = '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906';
      const version = VaultVersion.v1_5;
      const strategy = await service.getVaultStrategy({ address, version });
      expect(strategy).toEqual('0x0c7E0807011A218d0F1A156D3965875ff233933E');
    });
    it('should return v1 strategy', async function () {
      const service = new VaultsService(sdk);
      // BSMM_WBTC_RENBTC vault that is v1 vault
      const address = '0xb6d63a4e5ca740e96c26adabcac73be78ee39dc5';
      const version = VaultVersion.v1;
      const strategy = await service.getVaultStrategy({ address, version });
      expect(strategy).toEqual('0x711555f2B421DA9A86a18Dc163d04699310fE297');
    });
  });
});
