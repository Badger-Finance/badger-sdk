import { Network, BadgerAPI } from '@badger-dao/sdk';

async function printCitadelData() {
  const api = new BadgerAPI({
    network: Network.Ethereum,
    citadelBaseURL: 'https://staging-api.badger.com/citadel/v1',
  });

  const treasuryData = await api.loadCitadelTreasury();
  console.log(treasuryData);

  const treasuryOneWeekChart = await api.loadCitadelTreasuryCharts();
  console.log(treasuryOneWeekChart);
}

printCitadelData();
